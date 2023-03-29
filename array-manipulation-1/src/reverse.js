/* exported reverse */
function reverse(array) {
  const arr = [];
  const lastIndex = array.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}
