import { format } from "../src";

describe("number formatting", () => {
  test("1 returns 1", () => {
    expect(format(1).value).toBe("1");
  });

  test("10 returns 10", () => {
    expect(format(10).value).toBe("10");
  });

  test("100 returns 100", () => {
    expect(format(100).value).toBe("100");
  });

  test("1000 returns 1000", () => {
    expect(format(1000).value).toBe("1000");
  });

  test("10000 returns 10000", () => {
    expect(format(10000).value).toBe("10000");
  });

  test("10000 returns 10000", () => {
    expect(format(10000).value).toBe("10000");
  });

  test("100000 returns 100K", () => {
    expect(format(100000).value).toBe("100K");
  });

  test("1000000 returns 1000K", () => {
    expect(format(1000000).value).toBe("1000K");
  });

  test("10000000 returns 10M", () => {
    expect(format(10000000).value).toBe("10M");
  });

  test("100000000 returns 100M", () => {
    expect(format(100000000).value).toBe("100M");
  });

  test("2147483647 returns 2147M", () => {
    expect(format(2147483647).value).toBe("2147M");
  });
});

describe("number color", () => {
  test("1 returns #ffff00", () => {
    expect(format(1).color).toBe("#ffff00");
  });

  test("10 returns #ffff00", () => {
    expect(format(10).color).toBe("#ffff00");
  });

  test("100 returns #ffff00", () => {
    expect(format(100).color).toBe("#ffff00");
  });

  test("1000 returns #ffff00", () => {
    expect(format(1000).color).toBe("#ffff00");
  });

  test("10000 returns #ffff00", () => {
    expect(format(10000).color).toBe("#ffff00");
  });

  test("10000 returns #ffff00", () => {
    expect(format(10000).color).toBe("#ffff00");
  });

  test("100000 returns #ffffff", () => {
    expect(format(100000).color).toBe("#ffffff");
  });

  test("1000000 returns #ffffff", () => {
    expect(format(1000000).color).toBe("#ffffff");
  });

  test("10000000 returns #00ff80", () => {
    expect(format(10000000).color).toBe("#00ff80");
  });

  test("100000000 returns #00ff80", () => {
    expect(format(100000000).color).toBe("#00ff80");
  });

  test("2147483647 returns #00ff80", () => {
    expect(format(2147483647).color).toBe("#00ff80");
  });
});
