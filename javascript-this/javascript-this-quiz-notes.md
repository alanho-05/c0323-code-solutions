# javascript-this-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `this` in JavaScript?
'This' in JavaScript is an implicit parameter of all JavaScript functions.

- What does it mean to say that `this` is an "implicit parameter"?
Implicit parameter means it is available in a function's code block even though it was never included in the function's parameter list or declared.

- _When_ is the value of `this` determined in a function; **call time** or **definition time**?
Value of 'this' is determined during a function call time

- What does `this` refer to in the following code snippet?
    ```js
    const character = {
      firstName: 'Mario',
      greet: function () {
        const message = 'It\'s-a-me, ' + this.firstName + '!';
        console.log(message);
      }
    };
    ```
'This' in the code snippet refers to the character object.

- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    character.greet();
    ```
The character.greet() method's result will be a log of a string "It's-a-me Mario!" because 'this' is refering to the character object and using it's firstName property.

- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    const hello = character.greet;
    hello();
    ```
The result of hello() method is "It's-a-me, undefined!" because there is no object for 'this' to reference.

- How can you tell what the value of `this` will be for a particular function or method **definition**?
You cannot tell what the value of 'this' will be during a method definition.

- How can you tell what the value of `this` is for a particular function or method **call**?
You can tell what the value of 'this' will be during a call from the object the left of the dot. If there is none then it would default 'this' to the global window object.

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
