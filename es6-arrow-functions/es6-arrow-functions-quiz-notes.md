# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  The syntax for defining an arrow function is defining a function name, assignment operator, zero or more parameters, arrow function and then the expression or statement within curly braces.
  ex)
  const exp = () => console.log('This is an example');

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  When an arrow function is not surrounded by curly braces then it will automatically return the expression on the right. It does not need the return statement.

- When using _concise body syntax_, how do you return an object literal?
  When using concise body syntax, we need to wrap the object literal in parentheses (). This way we can tell JS engine that out code is either a block or object.

- In the expression
  `js
    foo(() => 42);
    `

  - Identify the arrow function
    The arrow function is `() => 42`.

  - How many arguments does the arrow function take?
    The arrow function takes 0 arguments.

  - What value does it return?
    The arrow function returns the number 42.

  - How many arguments are passed to the function `foo`?
    The function foo is being passed one argument.

  - What type of argument is passed to the function `foo`?
    The function foo is taking a callback function as its argument.

- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  The arrow function is `(y) => {console.log(`4y = ${4 \* y}`)`.

      - How many arguments does the arrow function take?

  The arrow function takes 1 argument (y).

      - What value does it return?

  The arrow function does not return anything. Since the block does not have a return statement.
  Instead a string interpolation is log to the console.

      - How many arguments are passed to the function `bar`?

  The function bar is being passed 1 argument.

      - What type of argument is passed to the function `bar`?

  An arrow function is being passed to the function bar.

      - When does the arrow function's code get executed?

  The arrow function is executed when the bar function is called.

- How does the value of `this` differ between standard functions and arrow functions?
  For standard, this is resolved based on the calling object
  For arrow, this is resolved by its lexical scope.
  Positioning within the code. Where it sits within the code.

The this value for standard functions defined by the object calling the function.
The this value for arrow functions refers to the window object.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
