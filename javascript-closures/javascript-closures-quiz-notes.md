# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  Scope means where can variables be accessed legally.
  At parse time (lexical scope); once the function is called.
  Global scope is determined when code is executed for the first time. Local scope is determined when a function is called.

- What allows JavaScript functions to "remember" variables from their surroundings?
  Closure allows JavaScript functions to remember variables from their surroundings.

- What values does a closure contain?
  Closure contains the variables that are in scope.

- When is a closure created?
  Function containing the closure is executed.

* Closure is created when a function is referenced.
  Functions can be referenced when it is called or passed as a prop.
  Closure is created when a function definition is assigned to a variable.

- How can you tell if a function will be created as a closure?
  If it is referencing outside variables.
  But always when a function is referenced.
  If there are any variables in scope at the time of creation of the function.

- In React, what is one important case where you need to know if a closure was created?
  In the useEffect hook (stale closures or infinite rerenders) for React or when passing functions to another component.
  When a function is a dependency.

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
