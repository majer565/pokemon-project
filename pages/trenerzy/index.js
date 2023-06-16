import TrainerPokemons from "@/components/UI/TrainerPokemons";
import { useState } from "react";
import Layout from "../../components/layout/layout";
import TrainerCard from "../../components/UI/TrainerCard";
import { DUMMY_DATA } from "./dummy";
import style from "./index.module.css";

const TrainersPage = () => {
  const [showPokemons, setShowPokemons] = useState(false);
  const [pokeList, setPokeList] = useState([]);
  const data = DUMMY_DATA;

  const handleShowPokemons = (pokemons) => {
    setPokeList(pokemons);
    setShowPokemons(true);
  };

  const handleHidePokemons = () => {
    setShowPokemons(false);
  };

  return (
    <Layout hidePokemons={handleHidePokemons}>
      <div className={style.cards}>
        {!showPokemons ? (
          data.map((card) => {
            return (
              <TrainerCard
                key={card.id}
                id={card.id}
                name={card.name}
                age={card.age}
                pokemon={card.pokemonNumber}
                badges={card.badges}
                color={card.color}
                pokemons={card.pokemons}
                showPokemons={() => {
                  handleShowPokemons(card.pokemons);
                }}
              />
            );
          })
        ) : (
          <TrainerPokemons pokemons={pokeList} />
        )}
      </div>
    </Layout>
  );
};

export default TrainersPage;
