import { expect, test } from "@jest/globals";
import genDiff from "../genDiff";


test("compare files", () => {
    expect(genDiff("./file1.json", "./file2.json")).toStrictEqual({
        "- follow": false,
        "  host": "hexlet.io",
        "- proxy": "123.234.53.22",
        "- timeout": 50,
        "+ timeout": 20,
        "+ verbose": true
      });
});
//NODE_OPTIONS=--experimental-vm-modules npx jest