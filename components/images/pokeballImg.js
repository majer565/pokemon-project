import Image from 'next/image';
import pokeball from '../../public/pokeball.svg';

const PokeBallImg = () => {
    return(
        <Image src={pokeball} width={200} height={200} />
    );
};

export default PokeBallImg;