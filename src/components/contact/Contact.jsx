import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import './Contact.css';

const Cotact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_daz566c',
      'template_tp729wh',
      form.current,
      'LLMs9k4BYlZrRFCpL'
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h5>Git In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="contact_option-h5">mohamedhamdyahmed94@gmail.com</h5>
            <a href="mailto:mohamedhamdyahmed94@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option_icon" />
            <h4>Messenger</h4>
            <h5>محمد حمدى</h5>
            <a href="https://m.me/anakingmsr" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option_icon" />
            <h4>Email</h4>
            <h5>+201125594521</h5>
            <a
              href="https://api.whatsapp.com/send?phone+201125594521"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Cotact;
