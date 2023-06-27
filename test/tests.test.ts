import { format } from "../src";

describe("number formatting", () => {
  test("1 returns 1", () => {
    expect(format(1)).toBe("1");
  });

  test("10 returns 10", () => {
    expect(format(10)).toBe("10");
  });

  test("100 returns 100", () => {
    expect(format(100)).toBe("100");
  });

  test("1000 returns 1000", () => {
    expect(format(1000)).toBe("1000");
  });

  test("10000 returns 10000", () => {
    expect(format(10000)).toBe("10000");
  });

  test("10000 returns 10000", () => {
    expect(format(10000)).toBe("10000");
  });

  test("100000 returns 100K", () => {
    expect(format(100000)).toBe("100K");
  });

  test("1000000 returns 1000K", () => {
    expect(format(1000000)).toBe("1000K");
  });

  test("10000000 returns 10M", () => {
    expect(format(10000000)).toBe("10M");
  });

  test("100000000 returns 100M", () => {
    expect(format(100000000)).toBe("100M");
  });

  test("2147483647 returns 2147M", () => {
    expect(format(2147483647)).toBe("2147M");
  });
});
