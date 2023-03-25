/* exported capitalizeWord */
function capitalizeWord(word) {
  let newWord = '';
  const arrayWord = word.split('');
  console.log(arrayWord);
  for (let i = 0; i < arrayWord.length; i++) {
    if (i === 0) {
      newWord += arrayWord[0].toUpperCase();
    }

  }
  console.log(newWord);
  return newWord;
}
