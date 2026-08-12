import { describe, expect, it } from "vite-plus/test";

import {
  formatDroppedTextFileForComposer,
  isComposerTextDropFile,
  partitionComposerDropFiles,
  resolveComposerTextDropFile,
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
  it("wraps contents with a filename banner", () => {
    expect(formatDroppedTextFileForComposer({ fileName: "a.md", contents: "# hi\n" })).toBe(
      "--- a.md ---\n# hi\n",
    );
  });
});

describe("resolveComposerTextDropFile", () => {
  it("inlines file contents", async () => {
    const file = fakeFile("a.md", "text/markdown", "# hi\n");
    await expect(resolveComposerTextDropFile(file)).resolves.toEqual({
      kind: "inline",
      text: "--- a.md ---\n# hi\n",
    });
  });

  it("rejects oversized files", async () => {
    const file = fakeFile("huge.md", "text/markdown", "x".repeat(200_001));
    await expect(resolveComposerTextDropFile(file)).resolves.toEqual({
      kind: "too-large",
      fileName: "huge.md",
      sizeBytes: 200_001,
    });
  });
});
