import { describe, expect, it } from "vite-plus/test";

import {
  COMPOSER_TEXT_DROP_MAX_BYTES,
  formatDroppedTextFileForComposer,
  isComposerTextDropFile,
  partitionComposerDropFiles,
  relativePathUnderCwd,
  resolveComposerTextDropFile,
} from "./composerTextFileDrop.ts";

function fakeFile(name: string, type: string, contents = "hi", size?: number): File {
  const file = new File([contents], name, { type });
  if (typeof size === "number") {
    Object.defineProperty(file, "size", { value: size });
  }
  return file;
}

describe("isComposerTextDropFile", () => {
  it("accepts markdown and plain text by extension or mime", () => {
    expect(isComposerTextDropFile(fakeFile("一、项目背景.md", ""))).toBe(true);
    expect(isComposerTextDropFile(fakeFile("notes.markdown", "text/markdown"))).toBe(true);
    expect(isComposerTextDropFile(fakeFile("readme.txt", "text/plain"))).toBe(true);
    expect(isComposerTextDropFile(fakeFile("data.json", "application/json"))).toBe(true);
  });

  it("rejects images and opaque binaries", () => {
    expect(isComposerTextDropFile(fakeFile("shot.png", "image/png"))).toBe(false);
    expect(isComposerTextDropFile(fakeFile("archive.zip", "application/zip"))).toBe(false);
    expect(isComposerTextDropFile(fakeFile("model.gguf", ""))).toBe(false);
  });
});

describe("relativePathUnderCwd", () => {
  it("returns a workspace-relative path when the drop is inside cwd", () => {
    expect(relativePathUnderCwd("/Users/alfie/proj/docs/a.md", "/Users/alfie/proj")).toBe(
      "docs/a.md",
    );
  });

  it("returns null outside the workspace", () => {
    expect(relativePathUnderCwd("/tmp/a.md", "/Users/alfie/proj")).toBeNull();
    expect(relativePathUnderCwd("/Users/alfie/proj", "/Users/alfie/proj")).toBeNull();
  });
});

describe("partitionComposerDropFiles", () => {
  it("splits images, text, and unsupported files", () => {
    const partitioned = partitionComposerDropFiles([
      fakeFile("a.png", "image/png"),
      fakeFile("b.md", "text/markdown"),
      fakeFile("c.zip", "application/zip"),
    ]);
    expect(partitioned.images.map((file) => file.name)).toEqual(["a.png"]);
    expect(partitioned.textFiles.map((file) => file.name)).toEqual(["b.md"]);
    expect(partitioned.unsupported.map((file) => file.name)).toEqual(["c.zip"]);
  });
});

describe("formatDroppedTextFileForComposer", () => {
  it("wraps contents with a filename header", () => {
    expect(formatDroppedTextFileForComposer({ fileName: "a.md", contents: "hello\n" })).toBe(
      "--- a.md ---\nhello\n",
    );
  });
});

describe("resolveComposerTextDropFile", () => {
  it("prefers a composer file mention when the absolute path is under cwd", async () => {
    const file = fakeFile("a.md", "text/markdown", "# hi");
    Object.defineProperty(file, "path", { value: "/Users/alfie/proj/docs/a.md" });
    await expect(resolveComposerTextDropFile(file, "/Users/alfie/proj")).resolves.toEqual({
      kind: "mention",
      text: "[a.md](docs/a.md) ",
    });
  });

  it("inlines file contents when the drop is outside the workspace", async () => {
    const file = fakeFile("一、项目背景.md", "text/markdown", "# 背景\n");
    await expect(resolveComposerTextDropFile(file, "/Users/alfie/proj")).resolves.toEqual({
      kind: "inline",
      text: "--- 一、项目背景.md ---\n# 背景\n",
    });
  });

  it("rejects oversized text drops", async () => {
    const file = fakeFile("big.md", "text/markdown", "x");
    Object.defineProperty(file, "size", { value: COMPOSER_TEXT_DROP_MAX_BYTES + 1 });
    await expect(resolveComposerTextDropFile(file, null)).resolves.toEqual({
      kind: "too-large",
      fileName: "big.md",
      sizeBytes: COMPOSER_TEXT_DROP_MAX_BYTES + 1,
    });
  });
});
