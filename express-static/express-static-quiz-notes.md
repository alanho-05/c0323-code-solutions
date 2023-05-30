# express-static-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the Express Static middleware?
  Static (unchanging files) as in checking if the file is there. If it is, return the file; if not then calls next() to the next middleware.
  Differs from app.get by looks in the folder and returning that folder if it exists.
  Its purpose is to serve static files/assets on request. Instead of downloaded all assets before the application is rendered.

- What does `express.static()` return?
  What does the function return? It retuns a middleware (a function), then passed to app.use.
  It returns the directory/file that is to be served.

- What are several examples of static files?
  Image files, .css file, .js file, .html file and text.

- What is a good way to serve application images using Express?
  Express.static is a good way to serve images. Place the images in the public folder of our server.

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
