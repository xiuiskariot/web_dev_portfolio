import { useState, useEffect, useRef } from "react";
import { AboutSnippets } from "../../ui_comp/about_snippets/AboutSnippets";
//import { AboutText } from "../../ui_comp/about_text/AboutText";
import { Aside } from "../../ui_comp/aside/Aside";
import s from "./About.module.css";
import { NavigationBlock } from "../../ui_comp/navigaton_block/NavigationBlock";

function numeric(number) {
  let arr = [];
  for (let i = 1; i <= number / 20; i++) {
    arr.push(i);
  }

  return arr;
}



const bio =
  "1 Я только в начале пути изучения большого мира фронтэнда. До этого янесколько лет проектировала атомные станции. Занимаюсь пилоном. Недавнонаучилась делать колесо и вышивать бисером.             Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi perferendis reprehenderit consequuntur hic quia beatae! Adipisci saepe quaerat, perferendis, repudiandae harum esse mollitia ab culpa aliquid fugit facere provident? At nobis cupiditate, harum exercitationem alias quos dicta adipisci beatae dolorum officia corrupti vero sapiente, repudiandae, reprehenderit eius? Amet perspiciatis nisi eaque incidunt voluptatibus porro ducimus magnam sed quisquam pariatur ipsa natus, rem deserunt eligendi reiciendis necessitatibus beatae, nulla, similique fugit corrupti provident consequatur aspernatur? Aspernatur voluptate dolore iusto itaque exercitationem laboriosam nam eum? Quibusdam doloribus ipsum ab sed? Ipsum ratione blanditiis magnam autem placeat aut quaerat quas laborum libero. ";
const stack =
  "я пишу на js, быстро стилизую все на css, королева флексконтейнера научилась не плакать, когда пишу на реакте             Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi perferendis reprehenderit consequuntur hic quia beatae! Adipisci saepe quaerat, perferendis, repudiandae harum esse mollitia ab culpa aliquid fugit facere provident? At nobis cupiditate, harum exercitationem alias quos dicta adipisci beatae dolorum officia corrupti vero sapiente, repudiandae, reprehenderit eius? Amet perspiciatis nisi eaque incidunt voluptatibus porro ducimu.";
const education = "как видите, я люблю учиться новому";

export const About = () => {
  const [aboutContent, setAboutContent] = useState(bio);
  const [arrNumbers, setArrNumbers] = useState([])

  const textAreaRef = useRef(null);


  useEffect(() => {
    setArrNumbers(numeric(textAreaRef.current.clientHeight));
  }, [aboutContent]);


  return (
    <section className={s.section_about}>
      {/* <AboutText text={aboutContent} height={height} /> */}
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
      <AboutSnippets />
      <Aside>
        <NavigationBlock title="professional-info">
          <ul>
            <li
              className={s.sub_category}
              onClick={() => {
                setAboutContent(bio);
              }}
            >
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
        </NavigationBlock>
        <NavigationBlock title="contacts">
          <>
            <p className={s.sub_category}>xiu666a@gmail.com </p>
            <p className={s.sub_category}>номер телефона</p>
          </>
        </NavigationBlock>
      </Aside>
    </section>
  );
};

//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;
//https://gist.github.com/300d3958bc4ccdd173c0053fd0ba387d.git
//git@gist.github.com:300d3958bc4ccdd173c0053fd0ba387d.git
//https://gist.github.com/300d3958bc4ccdd173c0053fd0ba387d.git
