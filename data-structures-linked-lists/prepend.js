import LinkedList from './lib/linked-list';

export default function prepend(list, value) {
  const newLinkedList = new LinkedList(value);
  newLinkedList.next = list;
  return newLinkedList;
}
