/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumbers = 1;
  while (currentNumbers < 11) {
    numbers.push(currentNumbers);
    currentNumbers++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumbers = 2;
  while (currentNumbers < 21) {
    evenNumbers.push(currentNumbers);
    currentNumbers += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {

  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  const keys = [];
  for (const i in object) {
    keys.push(i);
  }
  return keys;
}

function getValues(object) {
  const values = [];
  for (const i in object) {
    values.push(object[i]);
  }
  return values;
}
