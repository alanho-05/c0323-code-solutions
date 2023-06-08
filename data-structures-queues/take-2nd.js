export default function take2nd(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  for (let i = 0; i < 1; i++) {
    const storedQueue = queue.dequeue();
    queue.enqueue(storedQueue);
  }
  return queue.dequeue();
}
