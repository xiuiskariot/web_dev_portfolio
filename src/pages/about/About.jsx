import { useState } from "react";
import { AboutSnippets } from "../../ui_comp/about_snippets/AboutSnippets";

import { Aside } from "../../ui_comp/aside/Aside";
import s from "./About.module.css";
import { NavigationBlock } from "../../ui_comp/navigaton_block/NavigationBlock";
import { AboutText } from "../../ui_comp/about_text/AboutText";

const bio =
  "When I was in school, I saw a report about an event that deeply touched my soul. It was news about hackers who hacked the control unit of the nuclear power plant, they threatened that they would introduce xenon rods into the reactor and a reaction would occur like in Chernobyl. Then I thought, my God, what a cool and powerful joke nuclear power is. Multimillion-dollar equipment, advanced scientific developments, great engineering minds and all that. I have worked hard to become a part of this world. And so, I am already a young, charged specialist, I was immediately given to design a reactor drainage system for a distant station in Egypt.It would seem that a childhood dream came true, but I was almost immediately disappointed in my choice.I didn't know what it was like to work in a giant state corporation. Initiative is punishable - the more you offer, the more people ride you. It makes no sense to grow as a specialist - they will be promoted when there is a quota for the position. If you want to look at the nuclear power plant, you will. A stupid routine that arises because of poor software. But for me, work is primarily a way of self-expression.I like to solve complex problems, to look for a solution until it stops, until the code works the way it was intended not to execute one template after another and do something unique. It is important for me to see the result of my work. What's the point of spending most of your life sitting out your 8 hours and doing your best to portray a stormy activity without real results that will speak for you, what a cool specialist and a pleasant person to work with.";
const stack =
  "я пишу на js, быстро стилизую все на css, королева флексконтейнера научилась не плакать, когда пишу на реакте             Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi perferendis reprehenderit consequuntur hic quia beatae! Adipisci saepe quaerat, perferendis, repudiandae harum esse mollitia ab culpa aliquid fugit facere provident? At nobis cupiditate, harum exercitationem alias quos dicta adipisci beatae dolorum officia corrupti vero sapiente, repudiandae, reprehenderit eius? Amet perspiciatis nisi eaque incidunt voluptatibus porro ducimu.";
const education = <p>как видите, я люблю учиться новому</p>;

export const About = () => {
  const [aboutContent, setAboutContent] = useState(bio);

  return (
    <section className={s.section_about}>
      <AboutText aboutContent={aboutContent} />
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
            {/*eslint-disable-next-line */}
            <p className={s.sub_category}>+7(993)215-78-92</p>
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
