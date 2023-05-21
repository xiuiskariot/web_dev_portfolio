import { useEffect, useRef, useState } from "react";
import s from "./AboutText.module.css";

function numeric(number) {
  let arr = [];
  for (let i = 1; i <= number / 21; i++) {
    arr.push(i);
  }
  return arr;
}

// export function AboutText({ text, height }) {
//   // const [height, setHeight] = useState(144);
//   // const textAreaRef = useRef(null)

//   // // const height = 144;

//   // useEffect(() => {
//   //   setHeight(textAreaRef.current.clientHeight);
//   // }, [text]);

//   return (
//     <div className={s.about_text_area}>
//       <ul className={s.about_numeric}>
//         {numeric(height).map((el) => (
//           <li>{el}</li>
//         ))}
//       </ul>
//       <ul className={s.about_numeric}>
//         {numeric(height).map(() => (
//           <li> * </li>
//         ))}
//       </ul>
//       <p className={s.about_text_content} ref ={textAreaRef}>{text}</p>
//     </div>
//   );
// }
