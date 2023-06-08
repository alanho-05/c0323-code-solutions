export default function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const storedQueue = queue.dequeue();
  queue.enqueue(storedQueue);
}
