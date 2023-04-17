/* exported includes */
function includes(array, value) {
  for (const x of array) {
    if (x === value) {
      return true;
    }
  } return false;
}
