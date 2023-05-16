import { useEffect, useRef, useState } from "react";
import s from "./About_text.module.css";

function numeric(number) {
  let arr = [];
  for (let i = 1; i <= number / 24; i++) {
    arr.push(i);
  }
  return arr;
}

export const About_text = ({ text }) => {
  const [height, setHeight] = useState(0);

  const textAreaRef = useRef(null);

  useEffect(() => {
    setHeight(textAreaRef.current.scrollHeight);
  }, []);

  return (
    <div className={s.about_text_area}>
      <ul className={s.about_numeric}>
        {numeric(height).map((el) => (
          <li>{el} &nbsp; </li>
        ))}
      </ul>
      <ul className={s.about_numeric}>
        {numeric(height).map(() => (
          <li> * &nbsp;</li>
        ))}
      </ul>
      <p className={s.about_text_content} ref={textAreaRef}>
        {text}
      </p>
    </div>
  );
};
