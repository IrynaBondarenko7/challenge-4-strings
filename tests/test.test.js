const { reverseString } = require("../reverseString");
const { reverseWords } = require("../reverseWords");

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

describe("reverseWords()", () => {
  test("when given one word function returns the same word", () => {
    const output = reverseWords("hello");
    expect(output).toBe("hello");
  });

  test("when given mote than one word function returns words in reverse order", () => {
    const output = reverseWords("hello world");
    expect(output).toBe("world hello");

    const output2 = reverseWords("hello beautiful world");
    expect(output2).toBe("world beautiful hello");

    const output3 = reverseWords(
      "This text is styled with some of the text formatting properties"
    );
    expect(output3).toBe(
      "properties formatting text the of some with styled is text This"
    );
  });

  test("when given wrong data type function returns error text", () => {
    const output = reverseWords(5);
    expect(output).toBe("error: wrong datatype please enter a string");
  });
});
