import ReactEmbedGist from "react-embed-gist";
import s from "./AboutSnippets.module.css"
import my_photo from "./my_photo.jpg"
import details_i from "./details.svg"
import { useState } from "react";

export const AboutSnippets = () => {
  const [details1, setDetails1] = useState("")
  const [details2, setDetails2] = useState("");

  return (
    <div className={s.container}>
      {/* eslint-disable-next-line */}
      <p className={s.about_snippet_title}>// Code snippet showcase:</p>
      <div className={s.about_snippets}>
        <div className={s.about_snippet}>
          <div className={s.about_snippet_header}>
            <img src={my_photo} alt="me" />
            <p className={s.about_snippet_tag}>@xiuiskariot</p>

            <div
              className={s.about_snippet_details}
              onClick={() => {
                details1 === "first" ? setDetails1("") : setDetails1("first");
              }}
            >
              <img src={details_i} alt="d" />
              <p>details</p>
            </div>
          </div>
          <ReactEmbedGist gist="xiuiskariot/300d3958bc4ccdd173c0053fd0ba387d" />
          <p className={details1 === "first" ? s.details_active : s.details}>
            fisrt experience of using my server

          </p>
        </div>
        <div className={s.about_snippet}>
          <div className={s.about_snippet_header}>
            <img src={my_photo} alt="me" />
            <p className={s.about_snippet_tag}>@xiuiskariot</p>

            <div
              className={s.about_snippet_details}
              onClick={() => {
                details2 === "second" ? setDetails2("") : setDetails2("second");
              }}
            >
              <img src={details_i} alt="d" />
              <p>details</p>
            </div>
          </div>
          <ReactEmbedGist gist="xiuiskariot/b38c0a172a4a12025ecc014cf65fde3b" />
          <p className={details2 === "second" ? s.details_active : s.details}>
            this is a snippet from my first react app, states are really cool
          </p>
        </div>
      </div>
    </div>
  );
};

// 57248d8b88879a6ba77410e144622c60
        
          /* <ReactEmbedGist gist="xiuiskariot/b38c0a172a4a12025ecc014cf65fde3b" /> */
        
        
          /* <ReactEmbedGist gist="xiuiskariot/57248d8b88879a6ba77410e144622c60" /> */
        