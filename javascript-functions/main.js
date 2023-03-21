function convertMinutesToSeconds(minutes) {
  const time = minutes * 60;
  return time;
}

const convertMinutesToSecondsResult = convertMinutesToSeconds(4);
console.log('Result of convertMinutesToSeconds:', convertMinutesToSecondsResult);

function greet(name) {
  const string = 'Hey, ' + name;
  return string;
}

const greetResult = greet('Alan');
console.log('result of greet(name):', greetResult);

function getArea(width, height) {
  const area = width * height;
  return area;
}

const getAreaResult = getArea(3, 4);
console.log('Result of getArea:', getAreaResult);

function getFirstName(person) {
  const firstName = person.firstName;
  return firstName;
}

const getFirstNameResult = getFirstName({ firstName: 'Alan', lastName: 'Ho' });
console.log('Result of getFirstName:', getFirstNameResult);

function getLastElement(array) {
  const lastIndex = array[array.length - 1];
  return lastIndex;
}

const getLastElementResult = getLastElement(['Brett', 'Robert', 'Shawn']);
console.log('Result of getLastElement:', getLastElementResult);
