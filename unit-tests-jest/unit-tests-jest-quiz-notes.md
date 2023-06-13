# unit-tests-jest-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are unit tests?
  Testing the minimal code that is functional, great for running while in development.
  Unit tests are tests for the smallest piece of code in a system.
  Unit test has to be small and run fast. Can run while coding.

- Why is it important to write unit tests?
  It helps diagnose bugs when they may arise.
  Smaller unit tests is better at pinpointing where the issue occurs.

  Issue with console.logging is more of a manual way of testing.

- What code should be tested with a unit test? What code is not well suited for unit tests?
  All our logic and functions should be tested with unit tests.
  Anything can be tested with unit tests.
  Code that access database or 3rd party system are not suited for unit tests. Cannot rely on other services. Instead we use mock.
  Integration and end-to-end tests are not good for unit testing.

- What is Jest? What are some other popular JavaScript unit testing frameworks?
  Jest is a JavaScript testing framework. Other unit tests are Jasmine, Karma and Mocha.Cypress and Storybook are not unit tests.

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
