import { useState } from "react";
import s from "./ContactMe.module.css"
import { Aside } from "../../ui_comp/aside/Aside";
import { NavigationBlock } from "../../ui_comp/navigaton_block/NavigationBlock";

export const ContactMe = () => {
  const [inputName, setInputName] = useState("")
  const [inputMail, setInputMail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  let date = new Date()
  
  
  return (
    <section className={s.contact_container}>
      <form className={s.contact_form} onClick={(evt) => evt.preventDefault()}>
        <div>
          <label htmlFor="in_name">_name:</label>
          <input
            type="text"
            value={inputName}
            id="in_name"
            onChange={(evt) => setInputName(evt.target.value)}
          />
        </div>
        <div>
          <label htmlFor="in_mail">_email:</label>
          <input
            type="text"
            value={inputMail}
            id="in_mail"
            onChange={(evt) => setInputMail(evt.target.value)}
          />
        </div>
        <div>
          <label htmlFor="in_message">_message:</label>
          <textarea
            type="textarea"
            value={inputMessage}
            id="in_message"
            onChange={(evt) => setInputMessage(evt.target.value)}
          />
          <button className={s.contact_btn}>sumbit-message</button>
        </div>
      </form>
      <div className={s.contact_log}>
        <div>
          <span className={s.pink}>const</span> button
          <span className={s.pink}> = </span>
          document.querySelector <span className={s.grey}>(</span>
          <span className={s.orange}>'#sendBtn'</span>
          <span className={s.grey}>)</span> <br />
          <span className={s.pink}>const</span> message =
          <span className={s.grey}> &#123;</span> <br />
          &nbsp; name: <span className={s.orange}>
            &#34;{inputName}&#34;
          </span>, <br />
          &nbsp; email: <span className={s.orange}>
            &#34;{inputMail}&#34;
          </span>, <br />
          &nbsp; message:
          <span className={s.orange}>&#34;{inputMessage}&#34;</span>, <br />
          &nbsp; <span className={s.grey}>date: </span>
          <span className={s.orange}>&#34;{date.toDateString()}&#34;</span>,
          <br />
          <span className={s.grey}>&#125;</span> <br /> <br />
          button.addEventListener<span className={s.grey}>&#40;</span>
          <span className={s.orange}>'click'</span>
          <span className={s.grey}>, &#40;&#41;</span>
          <span className={s.pink}> &#8658;</span>
          <span className={s.grey}> &#123;</span> <br />
          &nbsp;form.send<span className={s.grey}>&#40;</span>message
          <span className={s.grey}>
            &#41;;
            <br />
            &#125;&#41;
          </span>
        </div>
      </div>
      <Aside>
        <NavigationBlock title="contacts">
          <>
            <p className={s.sub_category}>xiu666a@gmail.com </p>
            <p className={s.sub_category}>номер телефона</p>
          </>
        </NavigationBlock>
      </Aside>
    </section>
  );
}
