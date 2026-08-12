/** Soft cap so a dragged novel doesn't nuke the prompt. */
export const COMPOSER_TEXT_DROP_MAX_BYTES = 200_000;

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

export function formatDroppedTextFileForComposer(input: {
  fileName: string;
  contents: string;
}): string {
  const name = input.fileName.trim() || "file";
  const body = input.contents.replace(/^\uFEFF/, "");
  return `--- ${name} ---\n${body.trimEnd()}\n`;
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
  | { readonly kind: "inline"; readonly text: string }
  | { readonly kind: "too-large"; readonly fileName: string; readonly sizeBytes: number }
  | { readonly kind: "unreadable"; readonly fileName: string };

/** Always paste file contents into the composer. No path/link resolution. */
export async function resolveComposerTextDropFile(file: File): Promise<ResolvedComposerTextDrop> {
  if (file.size > COMPOSER_TEXT_DROP_MAX_BYTES) {
    return { kind: "too-large", fileName: file.name || "file", sizeBytes: file.size };
  }

  try {
    const contents = await file.text();
    return {
      kind: "inline",
      text: formatDroppedTextFileForComposer({ fileName: file.name || "file", contents }),
    };
  } catch {
    return { kind: "unreadable", fileName: file.name || "file" };
  }
}
