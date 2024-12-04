import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";

const ContactFormThree = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [validationError, setValidationError] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const phone = formData.get("phone").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !message || !phone) {
      setValidationError("All fields are required.");
      setShowAlert(true);
      setIsMessageSent(false);
      setTimeout(() => setShowAlert(false), 4000);
      return;
    }
    setValidationError("");

    emailjs
      .sendForm(
        "service_mxdohie",
        "template_z5cioqm",
        form.current,
        "jpLEXw_LKyA6GgI_U"
      )
      .then(
        (result) => {
          console.log(result);

          setShowAlert(true);
          setIsMessageSent(true);

          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
        },
        (error) => {
          console.log(error.text);

          setIsMessageSent(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Input name="name" label="Name" isClear={isMessageSent} />
      <Input name="email" label="Email" type="email" isClear={isMessageSent} />
      <Input name="phone" label="Phone" isClear={isMessageSent} />
      <Input
        name="message"
        label="Your message"
        type="textarea"
        isClear={isMessageSent}
      />
      <div className="form-group">
        <input type="submit" value="Send message" />
        <p className="form-messege"></p>
      </div>
      {showAlert && (
        <Alert
          message={
            validationError
              ? validationError // Show validation error if exists
              : isMessageSent
              ? "Your message was sent successfully"
              : "Something went wrong"
          }
          type={validationError ? "danger" : isMessageSent ? "success" : "danger"}
        />
      )}
    </form>
  );
};

export default ContactFormThree;
