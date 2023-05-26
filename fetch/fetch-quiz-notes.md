# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?
  fetch() returns a promise that resolves with a Response object (representation of the entire HTTP response).

- What is the default request method used by `fetch()`?
  GET is the default request method used by fetch().

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  Specific request method can be passed as the second argument when calling fetch().

- How does `fetch` report errors?
  Resolves and set the ok property to false.
  fetch calls the abort() method when there is an error.

## Notes

async function qnaFetch() {
try {
const res = await fetch('https://jsonplaceholder.typicode.com/users');
if (!res.ok) throw new Error(`fetch Error ${res.status}`);
const users = await res.json();
console.log(users);
} catch (err) {
console.error('fetch failed!', err);
}
}

qnaFetch();
