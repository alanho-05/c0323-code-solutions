export default function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return;
  }
  for (let i = 0; i < index; i++) {
    const storedQueue = queue.dequeue();
    queue.enqueue(storedQueue);
  }
  return queue.dequeue();
}

// while (index > 0) {
//   queue.enqueue(queue.dequeue());
//   index--;
// }
// return queue.dequeue();
