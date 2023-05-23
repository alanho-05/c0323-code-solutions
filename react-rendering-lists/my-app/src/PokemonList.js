export default function PokemonList({ pokedex }) {
  const pokemonList = pokedex.map((pokemon) => (
    <li key={pokemon.number}>
      <b>{pokemon.name}</b>
    </li>
  ));

  return <ul>{pokemonList}</ul>;
}
