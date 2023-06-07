export default function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return;
  }
  const top = stack.pop();
  if (stack.peek() === undefined) {
    stack.push(top);
    return;
  }
  const _2ndFromTop = stack.peek();
  stack.push(top);
  return _2ndFromTop;
}
