import s from "./Snippet.module.css";
import details_i from "../about_snippets/details.svg";
import my_photo from "../about_snippets/my_photo.jpg";
import ReactEmbedGist from "react-embed-gist";
import { useState } from "react";

export const Snippet = ({ snippet_id, desc }) => {
  const [details, setDetails] = useState(false);
  return (
    <div className={s.about_snippet}>
      <div className={s.about_snippet_header}>
        <img src={my_photo} alt="me" />
        <p className={s.about_snippet_tag}>@xiuiskariot</p>

        <div
          className={s.about_snippet_details}
          onClick={() => {
            details ? setDetails(false) : setDetails(true);
          }}
        >
          <img src={details_i} alt="d" />
          <p>details</p>
        </div>
      </div>
      <ReactEmbedGist gist={snippet_id} />
      <p className={details ? s.details_active : s.details}>{desc}</p>
    </div>
  );
};

// import axios from "axios";
// export const Snippet = () => {
//   const [details, setDetails] = useState(false);
//   const [snippet, setSnippet] = useState();
//   useEffect(() => {
//     const fetchSnippet = async () => {
//       const response = await axios.get(
//         "https://api.github.com/gists/300d3958bc4ccdd173c0053fd0ba387d"
//       );
//       setSnippet(response.data);
//       console.log(response.data);
//     };

//     fetchSnippet();
//   }, []);
//   console.log(snippet);
//   return (
//     <div className={s.about_snippet}>
//       <div className={s.about_snippet_header}>
//         <a href={snippet.owner.html_url}>
//           <img src={snippet.owner.avatar_url} alt="me" />
//           <p className={s.about_snippet_tag}>@{snippet.owner.login}</p>
//         </a>
//         <div
//           className={s.about_snippet_details}
//           onClick={() => {
//             details ? setDetails(false) : setDetails(true);
//           }}
//         >
//           <img src={details_i} alt="d" />
//           <p>details</p>
//         </div>
//       </div>
//       <ReactEmbedGist gist={snippet.owner.login / snippet.id} />
//       <p className={details ? s.details_active : s.details}>
//         {snippet.description}
//       </p>
//     </div>
//   );
// };
