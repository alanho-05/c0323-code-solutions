# react-components-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a React component?
  React component is a UI building block. It is a combination of markup (HTML), CSS, and JavaScript that is reusable.
  A JavaScript function that can have markup added to it.

- How do you define a component in React?
  Defining a component in React is similar to defining a function in JavaScript.
  First need to export a function, then give the funtion a name that starts with capital letter.
  In code block, open a return statement with (JSX) markup inside of it or null.
  Function definition cannot be nesting inside of components. Put definition in top-level.

- How is a component "rendered" (made visible on the browser page)?
  Components are rendered at the App function in the index.js.
  Component functions return JSX markup that can be rendered in HTML.

  React calls the component function.
  Components are appended to the DOM to be rendered.

## Notes

\*\*

How does React use JSX to render components?
Render: how HTML get into the DOM or drawing into a screen.
React renders components by calling the function.
-React calls our function, it returns JSX, React parses JSX and generate HTML. Calls appendChild() to push the HTML to the DOM.

\*\*

In the JSX, react knows it is a react component vs a dom compenent by function name starting with a capital letter for first word.
Has to accept exactly one argument, object with it's property.
Has to return a JSX element.
