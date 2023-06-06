/* exported capitalizeWords */
function capitalizeWords(string) {
  const wordsArray = string.split(' ');
  const newWord = [];

  for (const eachWord of wordsArray) {
    let word = '';
    for (let i = 0; i < eachWord.length; i++) {
      if (i === 0) {
        word += eachWord[i].toUpperCase();
      } else {
        word += eachWord[i].toLowerCase();
      }
    }

    newWord.push(word);

  }
  return newWord.join(' ');
}
