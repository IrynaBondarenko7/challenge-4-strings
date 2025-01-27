function reverseWords(words) {
  if (typeof words === "string") {
    const reversedWords = words.split(" ").reverse().join(" ");

    return reversedWords;
  } else return "error: wrong datatype please enter a string";
}

module.exports = { reverseWords };

//reverseWords('hello world') // returns 'world hello'
