/* exported drop */
function drop(array, count) {
  const arr = [];
  if (array.length === 0) {
    return [];
  }
  for (let i = count; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
