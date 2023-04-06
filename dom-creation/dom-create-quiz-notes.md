# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
It does not insert a new element into the page.

- How do you add an element as a child to another element?
The .appendChild() method adds a child to another element.

- What do you pass as the arguments to the `element.setAttribute()` method?
First argument of the element.setAttribute() method is the attribute name.
Second argument of the element.setAttribute() method is the value of the attribute.

- What steps do you need to take in order to insert a new element into the page?
First define the target element, next create the new element,
add any content and attribute if needed. Then add the new element to the target parent element.

- What is the `textContent` property of an element object for?
The textContent property of an element is to get or set the text content of that particular element.

- Name two ways to set the `class` attribute of a DOM element.
element.setAttribute() method and .className can set the class attribute of a DOM element. Also .classList (only add or remove one class and keeps the rest; great for targeting only one class)

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
By returning the end result, we can check our work each step of the function.
Whole code is wrapped neatly into a function name for us to call later.

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
