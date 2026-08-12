import { serializeComposerFileLink } from "@t3tools/shared/composerTrigger";

const TEXT_DROP_EXTENSIONS = new Set([
  ".md",
  ".markdown",
  ".mdx",
  ".txt",
  ".text",
  ".csv",
  ".tsv",
  ".json",
  ".jsonc",
  ".yaml",
  ".yml",
  ".toml",
  ".xml",
  ".html",
  ".htm",
  ".css",
  ".scss",
  ".less",
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".mjs",
  ".cjs",
  ".py",
  ".rb",
  ".go",
  ".rs",
  ".java",
  ".kt",
  ".swift",
  ".sh",
  ".bash",
  ".zsh",
  ".fish",
  ".ps1",
  ".sql",
  ".graphql",
  ".env",
  ".gitignore",
  ".dockerignore",
  ".editorconfig",
]);

export function fileExtension(fileName: string): string {
  const base = fileName.trim().toLowerCase();
  const dot = base.lastIndexOf(".");
  if (dot <= 0 || dot === base.length - 1) return "";
  return base.slice(dot);
}

export function isComposerTextDropFile(file: Pick<File, "name" | "type">): boolean {
  const mime = file.type.toLowerCase();
  if (mime.startsWith("text/")) return true;
  if (
    mime === "application/json" ||
    mime === "application/xml" ||
    mime === "application/javascript" ||
    mime === "application/typescript" ||
    mime === "application/x-yaml" ||
    mime === "application/yaml"
  ) {
    return true;
  }
  return TEXT_DROP_EXTENSIONS.has(fileExtension(file.name));
}

export function electronAbsolutePath(file: File): string | null {
  const path = (file as File & { path?: unknown }).path;
  return typeof path === "string" && path.trim().length > 0 ? path : null;
}

/**
 * Finder / OS file drags expose `file://` URLs on `text/uri-list` (and sometimes
 * `text/plain`). This is the reliable path source when Electron's renderer File
 * no longer carries `.path`, and when `webUtils.getPathForFile` fails across
 * the contextBridge clone.
 */
export function absolutePathsFromUriList(uriList: string): string[] {
  const paths: string[] = [];
  for (const line of uriList.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed.length === 0 || trimmed.startsWith("#")) continue;
    let candidate = trimmed;
    // Some hosts put angle-bracketed URIs in text/plain.
    if (candidate.startsWith("<") && candidate.endsWith(">")) {
      candidate = candidate.slice(1, -1).trim();
    }
    if (!/^file:/i.test(candidate)) continue;
    try {
      const url = new URL(candidate);
      if (url.protocol !== "file:") continue;
      let pathname = decodeURIComponent(url.pathname);
      // Windows file URLs come through as /C:/...
      if (/^\/[A-Za-z]:\//.test(pathname)) {
        pathname = pathname.slice(1);
      }
      if (pathname.length > 0) {
        paths.push(pathname);
      }
    } catch {
      // Ignore malformed URI lines.
    }
  }
  return paths;
}

export function absolutePathsFromDataTransfer(
  dataTransfer: Pick<DataTransfer, "getData">,
): string[] {
  const uriList = dataTransfer.getData("text/uri-list");
  const fromUriList = absolutePathsFromUriList(uriList);
  if (fromUriList.length > 0) return fromUriList;
  return absolutePathsFromUriList(dataTransfer.getData("text/plain"));
}

function basenameOfPath(path: string): string {
  const normalized = path.replaceAll("\\", "/");
  const slash = normalized.lastIndexOf("/");
  return slash >= 0 ? normalized.slice(slash + 1) : normalized;
}

export function matchAbsolutePathForDroppedFile(
  file: Pick<File, "name">,
  candidates: ReadonlyArray<string>,
): string | null {
  if (candidates.length === 0) return null;
  const name = file.name;
  if (candidates.length === 1 && (!name || basenameOfPath(candidates[0]!) === name)) {
    return candidates[0]!;
  }
  const exact = candidates.find((path) => basenameOfPath(path) === name);
  if (exact) return exact;
  // Case-insensitive fallback for APFS / Finder oddities.
  const lower = name.toLowerCase();
  return candidates.find((path) => basenameOfPath(path).toLowerCase() === lower) ?? null;
}

export function resolveDroppedFileAbsolutePath(
  file: File,
  getPathForFile?: ((dropped: File) => string | null) | null,
  uriListPaths?: ReadonlyArray<string> | null,
): string | null {
  if (typeof getPathForFile === "function") {
    try {
      const bridged = getPathForFile(file);
      if (typeof bridged === "string" && bridged.trim().length > 0) {
        return bridged;
      }
    } catch {
      // Fall through.
    }
  }
  const legacy = electronAbsolutePath(file);
  if (legacy) return legacy;
  if (uriListPaths && uriListPaths.length > 0) {
    return matchAbsolutePathForDroppedFile(file, uriListPaths);
  }
  return null;
}

export function relativePathUnderCwd(
  absolutePath: string,
  cwd: string | null | undefined,
): string | null {
  if (!cwd || cwd.trim().length === 0) return null;
  const normAbs = absolutePath.replaceAll("\\", "/");
  const normCwd = cwd.replaceAll("\\", "/").replace(/\/+$/, "");
  if (normAbs.length === 0 || normCwd.length === 0) return null;
  if (normAbs === normCwd) return null;
  const prefix = `${normCwd}/`;
  if (normAbs.startsWith(prefix)) {
    return normAbs.slice(prefix.length);
  }
  // macOS often preserves case; still try a case-insensitive match.
  if (normAbs.toLowerCase().startsWith(prefix.toLowerCase())) {
    return normAbs.slice(prefix.length);
  }
  return null;
}

export type ComposerDropPartition = {
  readonly images: File[];
  readonly textFiles: File[];
  readonly unsupported: File[];
};

export function partitionComposerDropFiles(files: ReadonlyArray<File>): ComposerDropPartition {
  const images: File[] = [];
  const textFiles: File[] = [];
  const unsupported: File[] = [];
  for (const file of files) {
    if (file.type.startsWith("image/")) {
      images.push(file);
      continue;
    }
    if (isComposerTextDropFile(file)) {
      textFiles.push(file);
      continue;
    }
    unsupported.push(file);
  }
  return { images, textFiles, unsupported };
}

export type ResolvedComposerTextDrop =
  | { readonly kind: "mention"; readonly text: string }
  | { readonly kind: "no-path"; readonly fileName: string };

/**
 * Always resolve text/markdown drops to a composer file link.
 * Never paste file contents — the user wants a reference the agent can open.
 */
export function resolveComposerTextDropFile(
  file: File,
  cwd: string | null | undefined,
  getPathForFile?: ((dropped: File) => string | null) | null,
  uriListPaths?: ReadonlyArray<string> | null,
): ResolvedComposerTextDrop {
  const absolutePath = resolveDroppedFileAbsolutePath(file, getPathForFile, uriListPaths);
  if (!absolutePath) {
    return { kind: "no-path", fileName: file.name || "file" };
  }

  const relative = relativePathUnderCwd(absolutePath, cwd);
  const linkPath = relative ?? absolutePath;
  return { kind: "mention", text: `${serializeComposerFileLink(linkPath)} ` };
}
