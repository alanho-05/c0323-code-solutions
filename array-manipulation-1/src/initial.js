/* exported initial */
function initial(array) {
  const arr = [];
  const lastIndex = array.length - 1;
  for (let i = 0; i < lastIndex; i++) {
    arr.push(array[i]);
  }
  return arr;
}
