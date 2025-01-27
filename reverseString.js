function reverseString(str) {
  if (typeof str === "string") {
    const reverseString = str.split("").reverse().join("");

    return reverseString;
  } else {
    return "error: wrong datatype";
  }
}

module.exports = { reverseString };
