import PokemonCard from "@/components/UI/PokemonCard";
import Layout from "../../components/layout/layout";
import style from "./index.module.css";
import { POKEMONS } from "./dummyPoke";

export default function Pokemony() {
  const pokemons = POKEMONS;
  console.log(pokemons);

  return (
    <Layout>
      <div className={style.cards}>
        {pokemons.map((pokemon, index) => {
          return (
            <PokemonCard
              pokemon={pokemon.name}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          );
        })}
      </div>
    </Layout>
  );
}
