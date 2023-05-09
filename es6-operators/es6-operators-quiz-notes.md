# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  Using outside of the `if`, execute a code if it is truthy.
  `&&` and `||` are binary logical operators. It can be used outside of an `if` statement because the 2 operands does not have to be a boolean value.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Short-circuit evalution means some part of an expression was not evaluated because value of the operator had already been determined after evaluating the first expression.
  It applies to `&&` when the first operand evaluates to false.
  It applies to `||` when the first operand evaluates to true.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The nullish coalescing is a operator that returns the right side operand if the left side operand is `null` or `undefined`.
  `??` only returns the right side operand if left operand is `null` or `undefined`.
  `||` returns the right side operand if left operand is a falsy value.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  ?: is an expression and if/else is a statement. ?: if we are assigning to a variable. If/else statement does not evauate to a statement.

  The ternary operator executes a certain expression depending if its condition is truty or falsy.
  It differs from an `if/else` statement by the amount of return statements.

- What is the `?.` (optional chaining) operator? When would you use it?
  Use it if you have a variable that is not defined.

  The optional chaining operator is a way of accessing an object's property or function.
  It is used when object accessed or function is `null` or `undefined`. This it returns undefined instead of an error.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The spread syntax allows arrays, strings and objects to be expanded. It can be used when all elements within an array or object needs to be included in a new array or object.

- What data types can be spread into an array? Into an object?
  Only iterables can be spread into an array. Non-iterable will throw an error.
  An array and object can be spread into an object. Spread anything into an object.

- How does spread syntax differ from rest syntax?
  Spread expands/speads it into a new object/array but rest condenses the remaining values into a variable.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
