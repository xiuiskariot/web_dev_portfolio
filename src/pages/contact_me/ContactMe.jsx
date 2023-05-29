import { useState } from "react";
import s from "./ContactMe.module.css"
import { Aside } from "../../ui_comp/aside/Aside";
import { NavigationBlock } from "../../ui_comp/navigaton_block/NavigationBlock";
import axios from "axios";

export const ContactMe = () => {
  const [inputName, setInputName] = useState("")
  const [inputMail, setInputMail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [formStatus, setFormStatus ] = useState(false)

  let date = new Date();

  const chat_id = "-691587049"
  const token = "6251882819:AAE0y4FsJALvcO9ISUOxgPua4ayw1tzEwEU";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
    chat_id: chat_id,
    text: `Имя: ${data.get('name')},\nEmail: ${data.get('email')},\nСообщение: ${data.get('msg')}`,
   })
    .then((response) => {
      console.log(response.data);
      form.reset();
    })
    .catch((error) => {
      console.log(error);
    });
};

  
  
  return (
    <section className={s.contact_container}>
      <form className={s.contact_form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="in_name">_name:</label>
          <input
            type="text"
            value={inputName}
            id="in_name"
            onChange={(evt) => setInputName(evt.target.value)}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="in_mail">_email:</label>
          <input
            type="text"
            value={inputMail}
            id="in_mail"
            onChange={(evt) => setInputMail(evt.target.value)}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="in_message">_message:</label>
          <textarea
            value={inputMessage}
            id="in_message"
            onChange={(evt) => setInputMessage(evt.target.value)}
            name="msg"
          />
          <button className={s.contact_btn} type="submit" onClick={()=>{formStatus? setFormStatus(false) : setFormStatus(true)}}>sumbit-message</button>
        </div>
      </form>
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
              <span className={s.grey}> &#123;</span> <br />
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


// 6251882819:AAE0y4FsJALvcO9ISUOxgPua4ayw1tzEwEU
//1059416328 chat id