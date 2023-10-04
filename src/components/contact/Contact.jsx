import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kyj2r25",
        "template_seqjvs6",
        form.current,
        "Rj0-VRGCTudei8HBN"
      )
      .then((result) => {
        console.log(result.text);
        setIsEmailSent(true);
        setIsError(false);
      })
      .catch((error) => {
        console.error(error.text);
        setIsError(true);
      });

    e.target.reset();
  };

  const closeModal = () => {
    setIsEmailSent(false);
  };

  return (
    <Fade bottom duration={750} delay={100} distance="30px">
      <section className="contact section" id="contact">
        <Fade bottom duration={750} delay={200} distance="30px">
          <h2 className="section__title">Get in touch!</h2>
        </Fade>
        <Fade bottom duration={750} delay={300} distance="30px">
          <div className="contact__container container grid">
            <div className="contact__content">
              {!isEmailSent && !isError ? (
                <div className="contact__card">
                  <a href="mailto:jdchung@scu.edu" className="contact__button">
                    <i className="bx bx-mail-send contact__card-icon"></i>
                  </a>
                  <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-data">jdchung@scu.edu</span>
                </div>
              ) : null}
            </div>
            <div className="contact__content">
              {isEmailSent ? (
                <div className="modal">
                  <div className="modal__content">
                    <button className="modal__close" onClick={closeModal}>
                      <i className="bx bx-x"></i>
                    </button>
                    <div className="success-message">
                      Email Sent!<i class="bx bxs-checkbox-checked"></i>
                    </div>
                  </div>
                </div>
              ) : isError ? (
                <div className="error-message">
                  Error sending email<i class="bx bxs-error"></i>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="contact__form">
                  <div className="contact__form-div">
                    <label className="contact__form-tag">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="contact__form-input"
                    />
                  </div>
                  <div className="contact__form-div">
                    <label className="contact__form-tag">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="contact__form-input"
                    />
                  </div>
                  <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag">Message</label>
                    <textarea
                      name="message"
                      cols="30"
                      rows="10"
                      required
                      className="contact__form-input"
                    ></textarea>
                  </div>
                  <button className="button button--flex">
                    Send Message
                    <svg
                      className="button__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                        fill="rgb(80, 229, 229)"
                      ></path>
                      <path
                        d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                        fill="rgb(80, 229, 229)"
                      ></path>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </Fade>
      </section>
    </Fade>
  );
};

export default Contact;
