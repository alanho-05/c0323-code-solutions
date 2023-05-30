# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  -When it is first rendered, then appended to the DOM to shows up on the webpage.
  -Render - calling out component function.
  -First time it is calling out function, is called mounting.
  Component is mounted (adding nodes/appears on screen the first time) to the DOM during the initial render and React uses appendChild() to the DOM. Component is also mounted when it's state has been updated with set() method

- What is a React Effect?
  React Effect is a side effect caused by rendering.

- When should you use an Effect and when should you not use an Effect?
  Use Effect to step out of React and sunchronize components with external system (non-React browser API, 3rd party, network...).
  Do not use Effect if no external system is involved.

- When do Effects run?
  -Will always run at least once, after the first render (mount).
  -After only when the dependancies change
  Effects runs at the end of a React commit, after the screen updates.

- What function is used to declare an Effect?
  'useEffect()' function declares an Effect.

- What are Effect dependencies and how do you declare them?
  -Anything and everything that is outside of the useEffect is a dependency.
  -useEffect gets called only when these outside variable is changed.
  Effect dependencies is an array of dependencies that will only run the useEffect code if a declared state or prop has been changed between render (compares with Object.is). Effect dependencies can be declared as an array in useEffect's second argument.

- Why would you want to clean up from an Effect?
  Effects are still running after component has been unmounted. If the component with useEffect was mounted again then a second Effect would run without cleaning up the first Effect.

- How do you clean up from an Effect?
  By returning a cleanup function.

- When does the cleanup function run?
  -They balance useEffect function. If useEffect is called 10 times, then cleanup function is also called 10 times.
  Cleanup function is called each time before Effect runs again and also when the component is unmounted (gets removed).

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
