# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
Logging things to the console helps us debug our code and also show us the results of our functions.

- What is the purpose of events and event handling?
Events can help inform when a certain action happens. Event handling lets us run a code once an event has been triggered.


- Are all possible parameters required to use a JavaScript method or function?
Not all parameters are required to use JS method or function.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
The .addEventListener lets you set up a function once a type of event occurs.

- What is a callback function?
A callback function is a function passed into another function as an argument and then invokes inside the outer function to complete the action.

- What object is passed into an event listener callback when the event fires?
A defined function or handleEvent() method is passed into the event listener.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
The event.target is DOM element node that is being targeted. You can check by console logging the event.target. You can find out more info at MDN.

- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
handleClick without parenthesis is being called the function should run as the page loads. handleClick() runs when the event fires.

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
