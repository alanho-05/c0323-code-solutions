/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const first = string[firstIndex];
  const second = string[secondIndex];
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += second;
    } else if (i === secondIndex) {
      newString += first;
    } else {
      newString += string[i];
    }
  }

  return newString;
}
