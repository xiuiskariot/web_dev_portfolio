import React from 'react'
import s from "./FormLog.module.css"

export const FormLog = ({ inputMail, inputMessage, inputName }) => {
  let date = new Date();
  return (
    <div className={s.contact_log}>
      <div>
        <ol>
          <li>
            <span className={s.pink}>const</span> button
            <span className={s.pink}> = </span>
            document.querySelector <span className={s.grey}>(</span>
            <span className={s.orange}>'#sendBtn'</span>
            <span className={s.grey}>)</span>
          </li>
          <li></li>
          <li>
            <span className={s.pink}>const</span> message =
            <span className={s.grey}> &#123;</span>
          </li>
          <li>
            &nbsp; name:
            <span className={s.orange}>&#34;{inputName}&#34;</span>,
          </li>
          <li>
            &nbsp; email:
            <span className={s.orange}>&#34;{inputMail}&#34;</span>,
          </li>
          <li>
            &nbsp; message:
            <span className={s.orange}>&#34;{inputMessage}&#34;</span>,
          </li>
          <li>
            &nbsp; <span className={s.grey}>date: </span>
            <span className={s.orange}>&#34;{date.toDateString()}&#34;</span>,
          </li>
          <li>
            <span className={s.grey}>&#125;</span>{" "}
          </li>
          <li></li>
          <li>
            button.addEventListener<span className={s.grey}>&#40;</span>
            <span className={s.orange}>'click'</span>
            <span className={s.grey}>, &#40;&#41;</span>
            <span className={s.pink}> &#8658;</span>
            <span className={s.grey}> &#123;</span>
          </li>
          <li>
            &nbsp;form.send<span className={s.grey}>&#40;</span>message
            <span className={s.grey}>&#41;;</span>
          </li>
          <li>
            <span className={s.grey}>&#125;&#41;</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
