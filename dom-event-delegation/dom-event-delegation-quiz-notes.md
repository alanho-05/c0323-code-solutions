# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
Is the element/node at which the event took place at.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
The once event is triggered it bubbles up towards the document root. Which is why an element can listen for events that happen in its descendent elements.

- What DOM element property tells you what type of element it is?
.tagName property tells you the type of element it is.

- What does the `element.closest()` method take as its argument and what does it return?
.element.closest() method takes a string of CSS selectors to match the element it is looking for.
It returns the closest ancestors that matches the string of CSS selectors it took as the argument.

- How can you remove an element from the DOM?
You can remove an element with the .remove() method.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
You would add the event listener to an ancestor/parent. This way you do not have to add a listener to every new element individually.

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
