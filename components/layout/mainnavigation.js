import PokemonImg from "../images/pokemonImg";
import Link from "next/link";
import style from "./mainNavigation.module.css";

const MainNagivation = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.links}>
        <ul>
          <li>
            <Link href="/trenerzy" onClick={props.hidePokemons} >TRENERZY</Link>
          </li>
          <li>
            <Link href="/">
              <PokemonImg />
            </Link>
          </li>
          <li>
            <Link href="/pokemony">POKEMONY</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNagivation;
