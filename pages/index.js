import Link from "next/link";
import HomeImg from "../components/images/homeImg";
import Layout from "../components/layout/layout";
import style from "./index.module.css";

export default function Home() {
  const handleButtonClick = () => {
    window.open('https://pokeapi.co', '_blank');
  };

  return (
    <Layout>
      <div className={style.container}>
        <div className={style.descBox}>
          <div className={style.descTitle}>Twoja przygoda z Pokemon!</div>
          <div className={style.desc}>
            <div className={style.descContent}>
              Witaj w świecie Pokemon! Zdobywaj doświadczenie jako trener i
              rozwijaj się w swojej podróży. Aplikacja wykorzystuje API Pokemon
              dostępne pod przyciskiem.
            </div>
            <button onClick={handleButtonClick} type="button" className={style.descButton}>
                PokeAPI
            </button>
          </div>
        </div>
        <HomeImg />
      </div>
    </Layout>
  );
}
