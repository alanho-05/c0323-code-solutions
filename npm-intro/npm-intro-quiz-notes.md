# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  Registry means its a website
  Application it is a process, that allows you to publish code packages for others to use or use other's code.
  NPM (node package manager) is a software registry. Makes sharing JavaScript code simple for publisher and user.

- What is a package?
  Collection of files.
  Packs of reusable code that is shared, published, installed.
  Package is a directory with one or more files in them.

- What are some other popular package managers?
  Other popular package managers are Yarn, PNPM.

- How can you create a `package.json` with `npm`?
  By running the command: npm init. We can create a `package.json`.

- What is a dependency and how do you add one to a package?
  It is a package that our package requires.
  'npm install "package name"'
  Dependencies are object that maps a package name to a version range.
  You can add a dependency by using the npm install `dependency`.

- What happens when you add a dependency to a package with `npm`?
  Updates package.json.
  Finds the package and installs it along with it dependencies into the node_modules.
  A module is added to your directory and package.json.

- What is a devDependency and how do you add one to a package?
  Only ran locally and used for during development (coding/testing).
  Added with 'npm install "package name" --save-dev'
  Necessary for development work but not used for application to run.
  devDependency are used only during development.

- How do you define and run `npm` scripts? Why are these useful?
  You can define a scripts by adding the script into package.json. These are useful to run a certain script with custom shell names.
  'npm run "script name"'
  Why: it is useful for running scripts quickly.

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
