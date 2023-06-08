export default function takeFront(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  return queue.dequeue();
}
