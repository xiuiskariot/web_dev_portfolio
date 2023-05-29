import habr_logo from "./assets/habr_logo.png"
import vk_logo from "./assets/vk_logo.png"
import gh_logo from "./assets/gh_logo.png"
import s from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer>
      <ul className={s.container}>
        <li>find me in:</li>
        <li>
          <img src={habr_logo} alt="habr" className={s.logo} />
        </li>
        <li>
          <img src={vk_logo} alt="vk" className={s.logo} />
        </li>
        <li>
          @xiuiskariot &nbsp;
          <img src={gh_logo} alt="git" />
        </li>
      </ul>
    </footer>
  );
}
