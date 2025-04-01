import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {CONTACT} from "../constants";
import {animate, motion} from "framer-motion"

export const ContactOld = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
    <form ref={form} onSubmit={sendEmail}>
      <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration:.5}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>
        <div className="text-center tracking-tighter">
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </div>
      
      </div>
      
    </form>
  );
};

export const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration:.5}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>
        <div className="text-center tracking-tighter">
          <a href="mailto:mdalt790@gmail.com" className="border-b">
            {CONTACT.email}
          </a>
        </div>
    </div>
  )
}
