import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4s64ztb', 'contact_form', form.current, 'FB9gmJn6k-wb7HmH9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        {/* <p className="sub--title">Get In Touch</p> */}
        <h2 className="contact-section--heading">Contact Me</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input type="text" autoComplete="on" className="contact--input text-md" name="first_name" id="first-name" required/>
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input type="text" autoComplete="on" className="contact--input text-md" name="last_name" id="last-name" required/>
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input type="email" autoComplete="on" className="contact--input text-md" name="user_email" id="email" required/>
          </label>
          <label htmlFor="subject" className="contact--label">
            <span className="text-md">Subject</span>
            <input type="text" autoComplete="on" className="contact--input text-md" name="subject" id="subject" required/>
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea autoComplete="off" className="contact--input text-md" name="message" id="message" rows="8"/>
        </label>
        <div>
          <button value="Send" type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  )
}