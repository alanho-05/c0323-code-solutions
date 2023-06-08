export default function getFront(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  return queue.peek();
}
