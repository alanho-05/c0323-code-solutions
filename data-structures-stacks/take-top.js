export default function takeTop(stack) {
  if (stack.peek() === undefined) {
    return;
  }
  return stack.pop();
}
