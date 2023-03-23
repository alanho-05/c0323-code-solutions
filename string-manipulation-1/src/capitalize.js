/* exported capitalize */
function capitalize(word) {
  let capped = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      capped += word[i].toUpperCase();
    }
    if (i !== 0) {
      capped += word[i].toLowerCase();
    }
  }
  return capped;
}
