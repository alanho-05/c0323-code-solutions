# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  Express middleware help connect/communicate front-end to the back-end to each other. Which is why it is called the middleware.
  Express middleware is a function that has access to the request object (req), response object (res), and the next middleware function.

- What is Express middleware useful for?
  It is useful for requesting and sending data between the front-end and back-end. Making it seemless for the user.

- How do you mount a middleware with an Express application?
  By calling the use() method on the app object. If not path is given for the mount, then it will default to the root path `/` and execute for every request to the app.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  The request (req) and response (res) objects are pass to the middleware to manage the request/response lifecycle of the server.

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
