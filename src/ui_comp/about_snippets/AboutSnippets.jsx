import ReactEmbedGist from "react-embed-gist";
import s from "./AboutSnippets.module.css"

export const AboutSnippets = () => {
  return (
    <div className={s.about_snippets }>
     <ReactEmbedGist
        gist="xiuiskariot/300d3958bc4ccdd173c0053fd0ba387d"
      />
      <ReactEmbedGist
        gist="xiuiskariot/b38c0a172a4a12025ecc014cf65fde3b"/>
    </div>
  )
};
