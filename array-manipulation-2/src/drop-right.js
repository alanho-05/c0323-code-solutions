/* exported dropRight */
function dropRight(array, count) {
  const arr = [];
  const indexAt = array.length - count;
  if (array.length === 0) {
    return [];
  }
  for (let i = 0; i < indexAt; i++) {
    arr.push(array[i]);
  }
  return arr;
}
