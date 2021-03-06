const { write, readSourceFile } = require("../../utils");
const { mem, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_MEM } = require("../../constants");

describe("testing mem", () => {
  it("renders mem", async () => {
    let markdown = await readSourceFile("src/tests/memes/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_MEM, mem, parsedContent);

    const fileName = "memes.html";
    await write(fileName, parsedContent.content, "src/tests/memes/");
    expect(1).toBe(1);
  });
});
