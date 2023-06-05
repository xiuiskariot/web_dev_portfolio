import s from "./AboutSnippets.module.css";
import { Snippet } from "../snippet/Snippet";

export const AboutSnippets = () => {
  return (
    <div className={s.container}>
      {/* eslint-disable-next-line */}
      <p className={s.about_snippet_title}>// Code snippet showcase:</p>
      <div className={s.about_snippets}>
        <Snippet
          desc="fisrt experience of using my server"
          snippet_id="xiuiskariot/300d3958bc4ccdd173c0053fd0ba387d"
        />
        <Snippet
          desc="this is a snippet from my first react app, states are really cool"
          snippet_id="xiuiskariot/b38c0a172a4a12025ecc014cf65fde3b"
        />
      </div>
    </div>
  );
};
