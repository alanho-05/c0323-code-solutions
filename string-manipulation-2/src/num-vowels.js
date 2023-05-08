/* exported numVowels */
function numVowels(string) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    const lowerCased = string[i].toLowerCase();
    if (vowel.includes(lowerCased)) {
      count++;
    }
  }

  return count;
}
