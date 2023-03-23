/* exported filterOutStrings */
function filterOutStrings(values) {
  const array = [];
  for (const i of values) {
    if (typeof i !== 'string') {
      array.push(i);
    } else continue;
  }
  return array;
}
