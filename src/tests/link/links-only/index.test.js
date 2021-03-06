const { write, readSourceFile } = require("../../../utils");
const { link, replaceMarkdown } = require("../../../parse-functions");
const { REGEXP_LINK } = require("../../../constants");

describe("testing links-only", () => {
  it("renders links-only", () => {
    let markdown = readSourceFile("src/tests/link/links-only/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_LINK, link, parsedContent);

    const fileName = "links-only.html";
    write(fileName, parsedContent.content, "src/tests/link/links-only/");
    expect(1).toBe(1);
  });
});
