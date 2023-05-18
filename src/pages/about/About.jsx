import { useState } from "react";
import { AboutSnippets } from "../../ui_comp/about_snippets/AboutSnippets";
import { AboutText } from "../../ui_comp/about_text/AboutText";
import { Aside } from "../../ui_comp/aside/Aside";
import s from "./About.module.css";


const bio = "Я только в начале пути изучения большого мира фронтэнда. До этого я несколько лет проектировала атомные станции. Занимаюсь пилоном. Недавно научилась делать колесо и вышивать бисером."
const stack = "я пишу на js, быстро стилизую все на css, королева флексконтейнера научилась не плакать, когда пишу на реакте"
const education = "как видите, я люблю учиться новому"


export const About = () => {
  const [aboutContent, setAboutContent] = useState(bio)
  let cont1 = (
    <ul>
      <li className={s.sub_category} onClick={() => setAboutContent(bio)}>
        bio
      </li>
      <li className={s.sub_category} onClick={() => setAboutContent(stack)}>
        stack
      </li>
      <li className={s.sub_category} onClick={() => setAboutContent(education)}>
        education
      </li>
    </ul>
  );
  let cont2 = (
    <>
      <p className={s.sub_category}>xiu666a@gmail.com </p>
      <p className={s.sub_category}>номер телефона</p>
    </>
  );

  return (
    <section className={s.section_about}>
      <AboutText text={aboutContent}></AboutText>
      <AboutSnippets />
      <aside>
        {/* <Aside title="personal-info" content={cont1} />
        <Aside title="contacts" content={cont2} /> */}
        <Aside>
          <ul>
            <li className={s.sub_category} onClick={() => setAboutContent(bio)}>
              bio
            </li>
            <li
              className={s.sub_category}
              onClick={() => setAboutContent(stack)}
            >
              stack
            </li>
            <li
              className={s.sub_category}
              onClick={() => setAboutContent(education)}
            >
              education
            </li>
          </ul>
        </Aside>
      </aside>
    </section>
  );
};

//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;
//https://gist.github.com/300d3958bc4ccdd173c0053fd0ba387d.git
//git@gist.github.com:300d3958bc4ccdd173c0053fd0ba387d.git
//https://gist.github.com/300d3958bc4ccdd173c0053fd0ba387d.git
