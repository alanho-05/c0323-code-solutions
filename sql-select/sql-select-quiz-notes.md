# sql-select-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is SQL and how is it different from languages like JavaScript?
  SQL (Structured Query Language) is a language used to interact with relational databases.
  Great way to retrieve, create, and manipulate date in a relational database.
  SQL is a declarative programming language, while JS is a imperative progamming language.

  - Tell the end result and system will figure out how to get to that result.
    Meaning SQL has programmers describe the results they want and the programming environment comes up with its own plan for getting the results.

- How do you retrieve specific columns from a database table?
  By selecting specific columns by name.
  Query starts with `select` keyword, comma-separated list of column names, followed by a `from` clause specifying the table to retrieve the data from.
  End it with `;`.

- How do you filter rows based on some specific criteria?
  Filter rows by specific criteria by using the `where` clause after the `from` statement.

- What are the benefits of formatting your SQL?
  Benefit of formatting our SQL is to get only the data we need and in the order we want it in.
  This makes complex data more readable.

- What are four comparison operators that can be used in a `where` clause?
  `=`, `<`, `>`, and `!=` are the comparison operators used in a `where` clause.

- How do you limit the number of rows returned in a result set?
  You can limit the rows returned in a result set by ending the select with `limit` keyword followed the max number of rows we want showing.

- How do you retrieve all columns from a database table?
  Using `*` to retrieve all columns from a database table.

- How do you control the sort order of a result set?
  `order by` keyword to control the sort order of a result set.
  Defaults to ascending order, if decending order is desired add `desc` after the column name.

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
