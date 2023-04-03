# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
We log things to the console to see our results and any errors. It is a useful tool to help us debug.

- What is a "model"?
Recreation of of some real world concept.
<!-- A model is an HTML document split into a tree of objects. -->

- Which "document" is being referred to in the phrase Document Object Model?
Document is being referred to the HTML.

- What is the word "object" referring to in the phrase Document Object Model?
Object is being referred to the HTML elements.

- What is a DOM Tree?
Tree like representation of our webpage.
DOM tree is the HTML broken up into node branches.

- Give two examples of `document` methods that retrieve a single element from the DOM.
Methods that retrieve a single element from the DOM are querySelector() and getElementByID().

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
querySelectorAll() retrieves multiple element from the DOM at once.

- Why might you want to assign the return value of a DOM query to a variable?
So you can reference the return value another time without calling the DOM query again.

- What `console` method allows you to inspect the properties of a DOM element object?
The console.dir() allows you to inspect the properties of a DOM element object.


- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
Script is place at the bottom because the browser needs to parse all of the elements in the HTML page before the JS code can access them.

- What does `document.querySelector()` take as its argument and what does it return?
querySelector() takes a string form of a CSS selector as its argument and returns the element object of the first element in the document that matches the argument.

- What does `document.querySelectorAll()` take as its argument and what does it return?
query.SelectorAll() takes a string form of a CSS selector as it argument and returns a NodeList of all of the matching elements.


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
