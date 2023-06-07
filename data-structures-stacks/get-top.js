export default function getTop(stack) {
  if (!stack) {
    return;
  }
  return stack.peek();
}
