import { prettifyTargets, prettifyVersion } from "../lib/pretty.js";

describe("pretty", () => {
  describe("prettifyVersion", () => {
    it("returns", () => {
      expect(prettifyVersion(true)).toBe(true);
      expect(prettifyVersion("0.16.0")).toBe("0.16");
      expect(prettifyVersion("1.0.0")).toBe("1");
      expect(prettifyVersion("1.1.0")).toBe("1.1");
      expect(prettifyVersion("1.0.2")).toBe("1.0.2");
      expect(prettifyVersion("1.2.3")).toBe("1.2.3");
    });
  });

  describe("prettifyTargets", () => {
    it("returns", () => {
      expect(prettifyTargets({})).toEqual({});

      expect(
        prettifyTargets({
          chrome: "54.0.0",
          electron: "1.6.0",
          node: "0.12.0",
        }),
      ).toEqual({
        chrome: "54",
        electron: "1.6",
        node: "0.12",
      });
    });
  });
});
