/* exported compact */
function compact(array) {
  const arr = [];
  for (const i of array) {
    if (Boolean(i) === true) {
      arr.push(i);
    } else continue;
  }
  return arr;
}
