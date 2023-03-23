/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const array = [];
  for (const i of words) {
    array.push(i + suffix);
  }
  return array;
}
