async function callFetch() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`{fetch Error ${response.status}`);
    const array = await response.json();
    console.log(array);
  } catch (err) {
    console.log('fetch failed', err);
  }
}

async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!response.ok) throw new Error(`{fetch Error ${response.status}`);
    const array = await response.json();
    console.log(array);
  } catch (err) {
    console.log('fetch failed!', err);
  }
}

callFetch();
fetchPokemon();
