/* exported oddOrEven */
function oddOrEven(numbers) {
  const array = [];
  for (const i of numbers) {
    if (i % 2 === 0) {
      array.push('even');
    }
    if (i % 2 === 1) {
      array.push('odd');
    }
  }
  return array;
}
