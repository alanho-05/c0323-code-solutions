# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  When list items are repetitive and have the same structure/component but with different data.
  Usually get those data from an API (will have same structure).

- Why is it important for React components to be data-driven?
  Instead of hard coding. Populates webpage with data it is given.
  Helps web page react to updated data.
  Makes component more re-usable.
  Data-driven is important since current web application request lots of data from the user.

- Where in the component code would a list of React components typically be built?
  Can also be built in the list wrapper element.
  List of React components is typically built at the top of the component code.

- What `Array` method is commonly used to create a list of React components?
  the Array.map() method is commonly used to create a list of React components.

- Why do components in a list need to have unique keys?
  Keys tell React which array item each component corresponds to. Important when array items gets sorted, inserted or deleted. This way it can make the correct updated to the DOM tree.
  -React knows what item has been changed; helps react keep track.

- What is the best value to use as a "key" prop when rendering lists?
  The best value to use as a "key" prop is the key from the data instead of generated keys on the fly.
  -Object ID is best value.

## Notes
