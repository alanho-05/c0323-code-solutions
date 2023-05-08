/* exported firstChars */
function firstChars(length, string) {
  let newWord = '';

  if (length < string.length) {
    for (let i = 0; i < length; i++) {
      newWord += string[i];
    }
  } else {
    for (let i = 0; i < string.length; i++) {
      newWord += string[i];
    }
  }

  return newWord;
}
