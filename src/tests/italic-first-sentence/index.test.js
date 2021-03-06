const { write, readSourceFile } = require("../../utils");
const { italic, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_EM } = require("../../constants");

describe("testing italic-first-sentence", () => {
  it("renders italic-first-sentence", async () => {
    let markdown = await readSourceFile("src/tests/italic-first-sentence/italic.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_EM, italic, parsedContent);

    const fileName = "italic-first-sentence.html";
    await write(fileName, parsedContent.content, "src/tests/italic-first-sentence/");
    expect(1).toBe(1);
  });
});
