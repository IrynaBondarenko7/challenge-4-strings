const { reverseString } = require("../reverseString");
const { reverseWords } = require("../reverseWords");
const { reverseSentence } = require("../reverseSentence");

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

describe("reverseSentence()", () => {
  test("when given single word function returns the same word", () => {
    const output = reverseSentence("hello");
    expect(output).toBe("hello");
  });

  test("when given single word and punctuation sign function returns word and sign in the same order", () => {
    const output = reverseSentence("hi!");
    expect(output).toBe("hi!");
  });

  test("when given a sentence without punctuation function returns a sentence in reverse order", () => {
    const output = reverseSentence("hi how are you");
    expect(output).toBe("you are how hi");
  });

  test("when given a sentence with punctuation function returns a sentence in reverse order and keep spaces and punctuation in place", () => {
    const output = reverseSentence("hi, how are you?");
    expect(output).toBe("you, are how hi?");

    const output2 = reverseSentence(
      "Domestic cats are characterized by retractable claws, powerful bodies, acute senses, long tails."
    );
    expect(output2).toBe(
      "tails long senses acute bodies powerful claws, retractable by, characterized are, cats Domestic."
    );
  });
});
