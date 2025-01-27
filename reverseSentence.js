function reverseSentence(sentence) {
  const splittedSentence = sentence.split(" ");

  const regex = /[^\w\s]+/;

  const arrOfSplittedElements = [];

  for (let i = 0; i < splittedSentence.length; i++) {
    if (splittedSentence[i].match(regex)) {
      const foundSign = splittedSentence[i].match(regex);
      const newString = splittedSentence[i].slice(0, -1);

      arrOfSplittedElements.push(newString);
      arrOfSplittedElements.push(foundSign[0]);
    } else {
      arrOfSplittedElements.push(splittedSentence[i]);
    }
  }

  const resultArray = [];
  const punctuationObject = {};

  for (let i = arrOfSplittedElements.length - 1; i >= 0; i--) {
    if (arrOfSplittedElements[i].match(regex)) {
      const foundSign = arrOfSplittedElements[i].match(regex);

      arrOfSplittedElements.forEach((element, index) => {
        if (element === foundSign[0]) {
          punctuationObject[index] = foundSign[0];
        }
      });
    } else {
      resultArray.push(arrOfSplittedElements[i]);
    }
  }

  for (let key in punctuationObject) {
    resultArray.splice(Number(key), 0, punctuationObject[key]);
  }

  let resultString = "";

  for (let i = 0; i < resultArray.length; i++) {
    if (
      resultArray[i].match(regex) ||
      resultArray.indexOf(resultArray[i]) === 0
    ) {
      resultString += resultArray[i];
    } else {
      resultString += " " + resultArray[i];
    }
  }

  return resultString;
}

module.exports = { reverseSentence };
