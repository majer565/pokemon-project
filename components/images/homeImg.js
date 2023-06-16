import Image from "next/image";
import homeImg from '../../public/home.jpg';

const HomeImg = () => {
    return(
        <Image src={homeImg} width={855} height={450} />
    );
};

export default HomeImg;