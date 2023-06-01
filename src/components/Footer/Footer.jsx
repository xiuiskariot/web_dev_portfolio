import gh_logo from "./assets/github-mark.png";
import tg_logo from "./assets/telegram-logo-965.png";
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <ul className={s.container}>
        <li>
          <a href="https://t.me/uhoju">
            _my_telegram
            <img src={tg_logo} alt="tg" className={s.logo} />
          </a>
        </li>
        <li>
          <a href="https://github.com/xiuiskariot">
            @xiuiskariot
            <img src={gh_logo} alt="git" className={s.logo} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
