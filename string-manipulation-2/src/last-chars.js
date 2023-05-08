/* exported lastChars */
function lastChars(length, string) {
  let newWord = '';
  const startPos = string.length - length;

  if (length < string.length) {
    for (let i = startPos; i < string.length; i++) {
      newWord += string[i];
    }
  } else {
    for (let i = 0; i < string.length; i++) {
      newWord += string[i];
    }
  }

  return newWord;
}
