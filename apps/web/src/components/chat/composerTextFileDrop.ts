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

export function resolveDroppedFileAbsolutePath(
  file: File,
  getPathForFile?: ((dropped: File) => string | null) | null,
): string | null {
  if (typeof getPathForFile === "function") {
    try {
      const bridged = getPathForFile(file);
      if (typeof bridged === "string" && bridged.trim().length > 0) {
        return bridged;
      }
    } catch {
      // Fall through to legacy File.path.
    }
  }
  return electronAbsolutePath(file);
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
): ResolvedComposerTextDrop {
  const absolutePath = resolveDroppedFileAbsolutePath(file, getPathForFile);
  if (!absolutePath) {
    return { kind: "no-path", fileName: file.name || "file" };
  }

  const relative = relativePathUnderCwd(absolutePath, cwd);
  const linkPath = relative ?? absolutePath;
  return { kind: "mention", text: `${serializeComposerFileLink(linkPath)} ` };
}
