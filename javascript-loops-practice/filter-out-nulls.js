/* exported filterOutNulls */
function filterOutNulls(values) {
  const array = [];
  for (const i of values) {
    if (i !== null) {
      array.push(i);
    } else continue;
  }
  return array;
}
