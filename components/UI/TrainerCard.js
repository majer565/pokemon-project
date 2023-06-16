import style from "./TrainerCard.module.css";
import CardPokeballImg from "@/components/images/CardPokeballImg";
import { COLORS } from "../UI/colors";
import { useRouter } from "next/router";

const TrainerCard = (props) => {
  const router = useRouter();
  const cardColor = COLORS[props.color];
  const cardGradient = {
    backgroundColor: cardColor.start,
    backgroundImage:
      "linear-gradient(215deg," +
      cardColor.start +
      " 0%," +
      cardColor.mid +
      " 50%," +
      cardColor.end +
      " 100%)",
  };

  return (
    <div className={style.box} style={cardGradient} onClick={props.showPokemons}>
      <div className={style.head}>
        <CardPokeballImg />
        <div className={style.trainer}>Trainer card</div>
        <CardPokeballImg />
      </div>
      <div className={style.content}>
        <div className={style.input}>
          <div className={style.text}>ID No.</div>
          <div className={style.textR}>{props.id}</div>
        </div>
        <div className={style.input}>
          <div className={style.text}>Name</div>
          <div className={style.textR}>{props.name}</div>
        </div>
        <div className={style.input}>
          <div className={style.text}>Age</div>
          <div className={style.textR}>{props.age}</div>
        </div>
        <div className={style.input}>
          <div className={style.text}>Pokemon</div>
          <div className={style.textR}>{props.pokemon}</div>
        </div>
        <div className={style.input}>
          <div className={style.text}>Badges</div>
          <div className={style.textR}>{props.badges}</div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
