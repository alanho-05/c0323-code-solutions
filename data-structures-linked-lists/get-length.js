export default function getLength(list) {
  let count = 0;
  while (list) {
    list = list.next;
    count++;
  }
  return count;
}
