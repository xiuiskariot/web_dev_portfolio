import {useState } from "react";
import s from "./ContactMe.module.css";
import { Aside } from "../../ui_comp/aside/Aside";
import { NavigationBlock } from "../../ui_comp/navigaton_block/NavigationBlock";
import axios from "axios";
import { FormLog } from "../../ui_comp/form_log/FormLog";
import { ContactAfterSubmit } from "../../ui_comp/contact_after_submit/ContactAfterSubmit";

export const ContactMe = () => {
  const [inputName, setInputName] = useState("");
  const [inputMail, setInputMail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [formStatus, setFormStatus] = useState(false);




  const chat_id = "-691587049";
  const token = "6251882819:AAE0y4FsJALvcO9ISUOxgPua4ayw1tzEwEU";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    axios
      .post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chat_id,
        text: `Имя: ${data.get("name")},\nEmail: ${data.get(
          "email"
        )},\nСообщение: ${data.get("msg")}`,
      })
      .then((response) => {
        console.log(response.data);
        form.reset();
        setFormStatus(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (formStatus) {
    return (
      <section className={s.contact_container}>
        <div className={s.contact_form}>
          <ContactAfterSubmit setFormStatus={setFormStatus} />
        </div>
        <FormLog
          inputMail={inputMail}
          inputName={inputName}
          inputMessage={inputMessage}
        />
        <Aside>
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
  }

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
            required
          />
        </div>
        <div>
          <label htmlFor="in_mail">_email:</label>
          <input
            type="email"
            value={inputMail}
            id="in_mail"
            onChange={(evt) => setInputMail(evt.target.value)}
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="in_message">_message:</label>
          <textarea
            value={inputMessage}
            id="in_message"
            onChange={(evt) => setInputMessage(evt.target.value)}
            name="msg"
            required
          />
          <button className={s.contact_btn} type="submit">
            sumbit-message
          </button>
        </div>
      </form>
      <FormLog
        inputMail={inputMail}
        inputName={inputName}
        inputMessage={inputMessage}
      />
      <Aside>
        <NavigationBlock title="contacts">
          <>
            <p className={s.sub_category}>xiu666a@gmail.com </p>

            <p className={s.sub_category}>+7(993)215-78-92</p>
          </>
        </NavigationBlock>
      </Aside>
    </section>
  );
};

