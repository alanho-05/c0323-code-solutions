export default function getTop(stack) {
  if (stack.peek() === undefined) {
    return;
  }
  return stack.peek();
}
