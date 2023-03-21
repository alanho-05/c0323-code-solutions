const student = {
  firstName: 'Alan',
  lastName: 'Ho',
  age: 29
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Loan Closer';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Porsche',
  model: 'GT3',
  year: 2022
};

vehicle['color'] = 'Yellow';
vehicle['isConvertible'] = false;

console.log('value of vehicle color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Didi',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
