/* exported reverseWord */
function reverseWord(word) {
  const lastIndex = word.length - 1;
  let newWord = '';
  for (let i = lastIndex; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
