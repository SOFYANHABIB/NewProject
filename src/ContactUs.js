import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g0lbnfk', 'template_6i61hrg', form.current, '7k8CyFUZgUr0Jk1bF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div><form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
  </div>
  )
}

export default ContactUs