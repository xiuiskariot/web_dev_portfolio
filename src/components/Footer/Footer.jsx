import habr_logo from "./8d55bfcb5fbb62d38d81a221ac140198.png"
import vk_logo from "./VK_Logo1.png"
import gh_logo from "./Vector.png"
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
          <img src={gh_logo} alt="" />
        </li>
      </ul>
    </footer>
  );
}
