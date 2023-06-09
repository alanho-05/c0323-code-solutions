import LinkedList from './lib/linked-list.js';

export default function append(list, value) {
  const newLinkedList = new LinkedList(value);

  while (list.next) {
    list = list.next;
  }
  list.next = newLinkedList;
  return list;
}
