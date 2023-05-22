# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  -Event in context of React: Event can be anything we want. We define it. Usually it is when user does something.
  Event in react is an action that happens on the webpage.
  Like click, hover, change, and focus.

- What is an "event handler"? Which component declares the handler?
  Event handler is a callback function that gets performed when an event happens.
  The component using the handler also declares the handler.
  -CustomButton (generator of the event) declares an event, where user clicks on me and an event happens.

- How do you pass an event handler to a React component?
  By passing the event handler function to event handler prop.

- What is the naming convention for event handlers?
  Naming convention starts with handle followed by event

- What is an "event handler prop"? Which component declares the prop?
  Event handler prop is the function that will handle the an event is fired but the function is being passed as a prop. The child component declares the event handler prop.

- What are some custom event handler props a component may wish to define?
  onClick, onMouseUp, onMouseDown, onFocus.

- What is the naming convention for custom event handler props?
  Starting with 'on'

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
