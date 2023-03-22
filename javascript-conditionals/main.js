/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  const answer = number < 5;
  return answer;
}

function isEven(number) {
  const remainder = number % 2;
  const even = remainder === 0;
  return even;
}

function startsWithJ(string) {
  const first = string[0];
  const answer = first === 'J';
  return answer;
}

function isOldEnoughToDrink(person) {
  const age = person.age;
  const oldEnough = age > 20;
  return oldEnough;
}

function isOldEnoughToDrive(person) {
  const age = person.age;
  const oldEnough = age > 15;
  return oldEnough;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else return 'invalid pH level';
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      console.log("We're the warner brothers!");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('Goodnight everyone!');
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Fast and Furious');
      break;
    case 'comedy':
      console.log('Jackass');
      break;
    case 'horror':
      console.log('Nightmare on Elm Street');
      break;
    case 'drama':
      console.log('Crazy Rich Asian');
      break;
    case 'musical':
      console.log('West Side Stories');
      break;
    case 'sci-fi':
      console.log('ET');
      break;
    default:
      console.log('Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi');
  }
}
