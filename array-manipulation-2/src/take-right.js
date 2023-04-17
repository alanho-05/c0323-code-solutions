/* exported takeRight */
function takeRight(array, count) {
  const arr = [];
  const indexAt = array.length - count;
  if (array.length === 0) {
    return [];
  }
  if (count > array.length) {
    for (let i = 0; i < array.length; i++) {
      arr.push(array[i]);
    }
  } else {
    for (let i = indexAt; i < array.length; i++) {
      arr.push(array[i]);
    }
  }
  return arr;
}
