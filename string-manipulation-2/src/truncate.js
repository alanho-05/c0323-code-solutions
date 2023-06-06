/* exported truncate */
function truncate(length, string) {
  let str = '';
  if (string.length === 0) {
    return '...';
  }
  if (length > string.length) {
    for (let i = 0; i < string.length; i++) {
      str += string[i];
    }
  } else {
    for (let i = 0; i < length; i++) {
      str += string[i];
    }
  }
  str += '...';
  return str;
}
