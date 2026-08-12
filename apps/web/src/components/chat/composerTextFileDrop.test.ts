import { describe, expect, it } from "vite-plus/test";

import {
  isComposerTextDropFile,
  partitionComposerDropFiles,
  relativePathUnderCwd,
  resolveComposerTextDropFile,
  resolveDroppedFileAbsolutePath,
} from "./composerTextFileDrop.ts";

function fakeFile(name: string, type: string, contents = "hi"): File {
  return new File([contents], name, { type });
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

describe("resolveDroppedFileAbsolutePath", () => {
  it("prefers the desktop bridge path helper", () => {
    const file = fakeFile("a.md", "text/markdown");
    expect(resolveDroppedFileAbsolutePath(file, () => "/Users/alfie/proj/docs/a.md")).toBe(
      "/Users/alfie/proj/docs/a.md",
    );
  });
});

describe("resolveComposerTextDropFile", () => {
  it("uses a workspace-relative composer file link when possible", () => {
    const file = fakeFile("a.md", "text/markdown", "# hi");
    expect(
      resolveComposerTextDropFile(file, "/Users/alfie/proj", () => "/Users/alfie/proj/docs/a.md"),
    ).toEqual({
      kind: "mention",
      text: "[a.md](docs/a.md) ",
    });
  });

  it("falls back to an absolute file link outside the workspace", () => {
    const file = fakeFile("一、项目背景.md", "text/markdown", "# 背景\n");
    expect(
      resolveComposerTextDropFile(file, "/Users/alfie/proj", () => "/tmp/一、项目背景.md"),
    ).toEqual({
      kind: "mention",
      text: "[一、项目背景.md](/tmp/%E4%B8%80%E3%80%81%E9%A1%B9%E7%9B%AE%E8%83%8C%E6%99%AF.md) ",
    });
  });

  it("reports no-path when the absolute path cannot be resolved", () => {
    const file = fakeFile("orphan.md", "text/markdown", "# hi");
    expect(resolveComposerTextDropFile(file, "/Users/alfie/proj", () => null)).toEqual({
      kind: "no-path",
      fileName: "orphan.md",
    });
  });
});
