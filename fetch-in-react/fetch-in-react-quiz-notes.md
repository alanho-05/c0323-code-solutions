# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
  By making a request with fetch.
  The useEffect is used to synchronize non-React system to load data to the React component.

- What browser function can be used to make HTTP requests to a server in React?
  Use the fetch browser function to make HTTP requests to a server in React.

- How do you use `useEffect` to load component data just once when the component mounts?
  By passing an empty dependencies array to the useEffect as an argument. This way useEffect will only be used once the component mounts.

- How do you use `useEffect` to load component data every time the data key changes?
  By adding the data into the depenancy array.
  By added the data key to the dependencies array, useEffect will load component data every time the data key changes.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  In a large-scale production app, it would be better to use a third-party data management library (React Query and Vercel SWR) for loading and managing backend data.

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
