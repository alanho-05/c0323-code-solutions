export default function takeTop(stack) {
  if (!stack) {
    return;
  }
  return stack.pop();
}
