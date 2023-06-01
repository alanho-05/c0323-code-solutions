# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  React context is an alternative to passing props. Context lets a parent provide data to the entire tree below it.

- What values can be stored in context?
  Any value can be stored in context.

- How do you create context and make it available to the components?
  Create context with `createContext` from 'react' and made available to components with useContext hook.

- How do you access the context values?
  Use context provider to access the context values.

- When would you use context? (in addition to the best answer: "rarely")
  Use context if building own router, if components need to know a user is logged in. Whenever an information is needed by a distant component in different parts of the tree.

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
