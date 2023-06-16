import Image from "next/image";
import { useEffect, useState } from "react";
import PokeBallImg from "../images/pokeballImg";
import style from "./PokemonCard.module.css";

const PokemonCard = (props) => {
  const [img, setImg] = useState();
  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + props.pokemon);
        const data = await res.json();
        setImg(data.sprites.other['official-artwork'].front_default);
    };
    fetchData();
  }, []);

  return (
    <div className={style.container}>
      <PokeBallImg />
      <div className={style.box}>
        <Image src={img} width={160} height={160} />
      </div>
    </div>
  );
};

export default PokemonCard;
