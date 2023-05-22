# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks in React are special function hook in different React features. Always starts with a 'use'.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Hooks must be in the top level of components or our own hooks
  Hooks cannot be called inside conditions, lopps, or nested functions.

- What is the purpose of state in React?
  Act as the component's memory; state helps retain data between renders and triggers a re-render of the component with new data.

- Why can't we just maintain state in a local variable?
  Local variables gets reset each render and changes to local variables do not trigger a re-render.

- What two actions happen when you call a `state setter` function?
  First the state value is staged to be updated by state setter and then a re-render is triggered on that component.

- When does the local `state variable` get updated with the new value?
  Local state variable gets updated with the new value when state setter function is called and re-render happens.

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
