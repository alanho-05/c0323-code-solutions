import takeAChance from './take-a-chance.js';

const promise = takeAChance('Alan');

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.message);
  });
