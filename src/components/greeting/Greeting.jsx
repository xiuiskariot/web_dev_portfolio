import s from "./Greeting.module.css";

export const Greeting = () => {
  return (
    <div className={s.greeting}>
      <h2 className={s.greeting_phrase}>Hi all. I am</h2>
      <h1 className={s.greeting_name}>Ksusha Voronina</h1>
      <p className={s.greeting_prof}>&gt; Front-end developer</p>

      {/*eslint-disable-next-line */}
      <p className={s.greeting_comment}>
        // you can also see it on my Github page
      </p>
      <p className={s.greeting_link}>
        <span className={s.violet}>const </span>
        <span className={s.green}>githubLink </span>
        {/*eslint-disable-next-line */}
        <span className={s.white}> = </span>
        <a href="https://github.com/xiuiskariot" className={s.orange}>
          "https://github.com/xiuiskariot"
        </a>
      </p>
    </div>
  );
};
