import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";

const ContactFormOne = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [validationError, setValidationError] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

      const formData = new FormData(form.current);
      const name = formData.get("name").trim();
      const email = formData.get("email").trim();
      const company = formData.get("company").trim();
      const phone = formData.get("phone").trim();
  
      if (!name || !email || !company || !phone) {
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
      <Input name="company" label="Company" isClear={isMessageSent} />
      <Input name="phone" label="Phone" isClear={isMessageSent} />
      <div className="form-group">
        <button className="axil-button btn-large btn-transparent w-100">
          <span className="button-text">Contact Us</span>
          <span className="button-icon" />
        </button>
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

export default ContactFormOne;
