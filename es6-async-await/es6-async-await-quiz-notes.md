# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  Await until the promise a fulfilled.
  `async` and `await` keywords are used to enable an asynchronous, promise-based behavior. Making asynchronous functions look more like synchronous code.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Syntactically difference but same functionality.
  async and await looks more synchronous, does not have any states as it returns a promise either resolved or reject and is easier to read/follow.

- When do you use `async`?
  async always returns a promise. Wraps a non-promise.
  When we want to use await function, then we must use async.
  `async` is used to declare an asynchronous function.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  Use await to wait for a Promise to settle.
  Do not use await on a synchronous function.
  `await` is used to wait for a Promise and get is filfillment value and can only be used within a `async`. Do not want to use an `await` when you want your function to run synchronously. If used it will change it to an asynchronous function.

- How do you handle errors with `await`?
  Use try...catch in order to handle errors.
  We use .catch() method to handle errors with `await`.

- What do `try`, `catch` and `throw` do? When do you use them?
  try: When we want to try and it is before await.
  catch: Goes after the wait.
  throw: Creates an exception/error, which makes code to stop executing and goes to the closest catch.

  `try`: will run the code block when its function is called. Used when want a code block to run.
  `catch`: is the block that runs when `try` throws an exception. Used when try block has an error and throws an exception.
  `throw`: used to throw an exception and specify the value to be thrown. Used to throw a user-defined exception.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  Without await the resolved value is not given, instead the Promise is returned. For a rejection without await, try...catch is not able to catch it.
  The code would not wait at the promise object and continue tracing the code. Without the await, the promise object is returned.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  `async/await` is better to understand.

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
