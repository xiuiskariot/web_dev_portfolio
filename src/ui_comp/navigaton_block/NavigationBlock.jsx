import triangle from "./trainglr.svg";
import s from "./NavigationBlock.module.css"
import { useState } from "react";

export function NavigationBlock({title, children }) {
  const [active, setActive] = useState("");

  return (
    <nav>
      <div
        className={s.accordion_heading}
        onClick={() => {
          active === title ? setActive("") : setActive(title);
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
        {children}
      </div>
    </nav>
  );
}
