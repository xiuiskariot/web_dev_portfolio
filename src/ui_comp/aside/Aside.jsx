import { useState } from "react";
import s from "./Aside.module.css";

import triangle from "./trainglr.svg";

export const Aside = ({ title, content, chidren }) => {
  const [active, setActive] = useState("");

  return (
    <nav>
      <div
        className={s.accordion_heading}
        onClick={() => {
         active === title? setActive("") : setActive(title);
        }}
      >
        <img
          src={triangle}
          alt="close"
          className={
            active === title
              ? s.accordion_heading_active
              : s.accordion_heading_not_active
          }
        />
        <p>{title}</p>
      </div>

      <div className={active === title ? s.show : s.accordion_content}>
        {content}
      </div>
    </nav>
  );
};
