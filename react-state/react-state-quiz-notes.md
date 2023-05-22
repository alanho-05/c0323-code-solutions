# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Specail react function that controls the life cycle (runtime behavior; moment they are create till they are destoryed)
  Cycle:
  Created
  Mounted to DOM
  Called (to render)
  Re-rendered
  Hooks in React are special function hook in different React features. Always starts with a 'use'.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  *Hooks must be in the top level of components or our own hooks (called in the same order, very time; so cannot be conditional).
  *Hooks cannot be called inside conditions, lopps, or nested functions.
  *Start with 'use'.
  *Who calls hook? React component or another hook (we can write our own hooks).

- What is the purpose of state in React?
  Anything can be put in states.
  Why do we need it? State affect the visual display of a component. If not, then most likely not state.
  Act as the component's memory; state helps retain data between renders and triggers a re-render of the component with new data.

- Why can't we just maintain state in a local variable?
  Local variables gets reset each render and changes to local variables do not trigger a re-render.

- What two actions happen when you call a `state setter` function?
- Updated React's copy of the variable not the local variable. Local variable gets updated on the next render (when useState is called).
  First the state value is staged to be updated by state setter and then a re-render is triggered on that component.

- When does the local `state variable` get updated with the new value?
  Local state variable gets updated with the new value when state setter function is called and re-render happens. When useState is called.

## Notes

All student notes should be written here.

State variable get assigned when it is mounted to DOM. Only assigned once.
