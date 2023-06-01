import green from "./Green.svg";
import blue from "./Blue.svg";
import snake from "./Snake_Game.svg";
import my_photo from "./my_photo.jpg"
import s from "./Home.module.css";

import { Greeting } from "../../components/Greeting/Greeting";


export const Home = () => {
  
  return (
    <div className={s.home_container}>
      <Greeting />
      <div className={s.color_container}>
        <img src={green} alt="b" className={s.do} />
        <img src={blue} alt="b" className={s.go} />
        <img src={my_photo} alt="s" className={s.snake} />

      </div>
    </div>
  );
};
