/* exported isVowel */
function isVowel(char) {
  const unCapped = char.toLowerCase();
  switch (unCapped) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}
