import green from "./Green.svg";
import blue from "./Blue.svg";
import snake from "./Snake_Game.svg";
import s from "./Home.module.css";

import { Greeting } from "../../components/greeting/Greeting";


export const Home = () => {
  
  return (
    <div className={s.home_container}>
      <Greeting />
      <div className={s.color_container}>
        <img src={green} alt="b" className={s.do} />
        <img src={blue} alt="b" className={s.go} />
        <img src={snake} alt="s" className={s.snake} />

      </div>
    </div>
  );
};
