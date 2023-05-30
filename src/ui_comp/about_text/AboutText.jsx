import { useEffect, useRef, useState } from "react";
import s from "./AboutText.module.css";

function numeric(number) {
  let arr = [];
  for (let i = 1; i <= number / 21; i++) {
    arr.push(i);
  }
  return arr;
}

export function AboutText({ aboutContent }) {
  const textAreaRef = useRef(null);
  const [arrNumbers, setArrNumbers] = useState([]);

  useEffect(() => {
    setArrNumbers(numeric(textAreaRef.current.clientHeight));
  }, [aboutContent]);

  return (
    <div className={s.about_text_area}>
      <ul className={s.about_numeric}>
        {arrNumbers.map((el) => (
          <li>{el}&nbsp; </li>
        ))}
      </ul>

      <p className={s.about_text_content} ref={textAreaRef}>
        {aboutContent}
      </p>
    </div>
  );
}
