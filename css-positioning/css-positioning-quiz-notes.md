# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
The default value for position is static.

- How does setting `position: relative` on an element affect document flow?
Keeps the document flow, wont affect it.

- How does setting `position: relative` on an element affect where it appears on the page?
Default it does not. But if offset is defined, it can move the element relative to where it originally was.

- How does setting `position: absolute` on an element affect document flow?
Absolute removed the element from the document flow and does not affect the position of other elemnts on the page.

- How does setting `position: absolute` on an element affect where it appears on the page?
It moves to the top of the page; unless containted by a parent element with relatively positioned.

The element is removed from the flow and surrounding elements does not position around it.

- How do you constrain an absolutely positioned element to a containing block?
You can constrain absolutly positioned element by setting it to the child of an relativly positioned element.

- What are the four box offset properties?
top, bottom, left and right

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
