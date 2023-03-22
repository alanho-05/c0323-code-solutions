const num1 = 4;
const num2 = 3;
const num3 = 8;

const maximumValue = Math.max(num1, num2, num3);
console.log('result of maximumValue:', maximumValue);

const heroes = ['Batman', 'Superman', 'Ironman', 'Spiderman'];

let randomNumber = Math.random();
randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);
console.log('Result of randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('result of randomHero:', randomHero);

const library = [
  {
    title: 'Animal Farm',
    author: 'George Orwell'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley'
  }
];

const lastBook = library.pop();
console.log('result of lastBook:', lastBook);

const firstBook = library.shift();
console.log('result of firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Alan Ho';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('My Name is', sayMyName);
