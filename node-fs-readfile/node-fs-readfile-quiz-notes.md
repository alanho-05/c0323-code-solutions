# node-fs-readfile-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a directory?
  A directory is a file system cataloging structure that contains references to other computer files and other directories.
  Allows user to group giles into seperate collections.

- What is a relative file path?
  Relative to where node is running for node.fs/read or write.
  Relative file path is the location of a file relative to the current directory we are on.
  . means current directory.
  .. meants parent directory.

- What is an absolute file path?
  Absolute file path always contains the root element and complete directory list required to locate the file.
  Root starts with /

- What module does Node.js include for manipulating the file system?
  The Node.js includes `fs` for manipulating the file system.
  Callback based or Promise based.

- What method is available in the `node:fs` module for reading data from a file?
  The fsPromise.readFile(path,[,options]) method is available for reading data from a file.

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
