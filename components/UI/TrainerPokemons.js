import PokemonCard from "@/components/UI/PokemonCard";

export default function TrainerPokemons(props) {
  const pokemons = props.pokemons;

  return pokemons.map((pokemon) => {
    return <PokemonCard key={pokemon.name} pokemon={pokemon.name} />;
  });
}
