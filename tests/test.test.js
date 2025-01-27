const { reverseString } = require("../reverseString");

describe("reverseString()", () => {
  test("when given word with one letter function returns the same letter", () => {
    const output = reverseString("b");
    expect(output).toBe("b");
  });

  test("when given word function returns reverse word", () => {
    const output = reverseString("hello");
    expect(output).toBe("olleh");

    const output2 = reverseString("landscaping");
    expect(output2).toBe("gnipacsdnal");
  });

  test("when given number function returns error string", () => {
    const output = reverseString(5);
    expect(output).toBe("error: wrong datatype");
  });

  test("when given wrong data type function returns error string", () => {
    const output = reverseString([]);
    expect(output).toBe("error: wrong datatype");
  });
});
