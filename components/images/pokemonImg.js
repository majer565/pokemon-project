import Image from "next/image";
import pokemonSVG from '../../public/pokemon.svg';

const PokemonImg = () => {
    return (
        <Image src={pokemonSVG} width={350} height={127} />
    );
};

export default PokemonImg;