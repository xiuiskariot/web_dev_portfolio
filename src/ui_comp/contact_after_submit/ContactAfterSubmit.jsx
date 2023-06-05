import React from "react";
import s from "./ContactAfterSubmit.module.css";

export const ContactAfterSubmit = ({ setFormStatus }) => {
  return (
    <>
      <h1 className={s.title}>Thank you! 🤘</h1>
      <h2 className={s.subtitle}>
        Your message has been accepted. You will recieve answer really soon!
      </h2>
      <button
        className={s.btn_after}
        onClick={() => {
          setFormStatus(false);
        }}
      >
        send-new-message
      </button>
    </>
  );
};
