export default function updateHead(list, value) {
  list.data = value;
  console.log(list.print());
  return list;
}
