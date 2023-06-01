# react-custom-hooks-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a React custom hook?
  A hook that we define.
  React custom hooks is developer's own hook made to share logic between components.

- When are custom hooks useful? When are they not required?
  It is useful when logic is shared between 2 or more components and can be reused. Reduce repetitive logic.
  Custom hook is not needed when duplication is simple and not using Effects. Effects steps out of React. If using Effect multiple times, it may be useful to use a custom hook.
  -Not needed if not using any other hooks.
  Write a custom hook if your custom hook is using a hook.

- What is the syntax (or naming convention) for writing a custom hook?
  Hooks must start with 'use' followed by a Capital letter and can return arbitraty values.
  Only functions that call hooks should use the 'use' prefix.
  Hook rules:
  Called by other hooks or components
  Called on top-level

- How do you call a custom hook?
  Call it like any other functions but will the rules of hooks.
  React components will call the custom hook when the component is rendered.

- When do custom hooks execute?
  -When it is called.
  Usually every time the component using it renders.
  Custom hook executes when component is rendered and mounted to the DOM.

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
