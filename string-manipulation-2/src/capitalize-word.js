/* exported capitalizeWord */
function capitalizeWord(word) {
  let newWord = '';
  const arrayWord = word.split('');

  if (word.toLowerCase() === 'javascript') {
    newWord = 'JavaScript';
  } else {
    for (let i = 0; i < arrayWord.length; i++) {
      if (i === 0) {
        newWord += arrayWord[i].toUpperCase();
      } else {
        newWord += arrayWord[i].toLowerCase();
      }
    }
  }

  return newWord;
}
