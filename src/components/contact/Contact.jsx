import React, { useRef } from 'react';
import './contact.css'
import {HiOutlineMail}from'react-icons/hi'
import {ImWhatsapp}from'react-icons/im'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bn51iet', 'template_2e0bbkm', form.current, 'S3DaClrNbGdMsCmyZ')
    e.target.reset() //reset los inputs
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail/>
            <h4>Email</h4>
            <h5>tamarafrazzetta@gmail.com</h5>
            <a href="mailto:tamarafrazzetta@gmail.com" className='contact__option-icon' target='_blank' rel='noreferrer'>Send an email</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp/>
            <h4>WhatsApp</h4>
            <a href="https://walink.co/11659b" className='contact__option-icon' target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='Your full name' required/>
          <input type="email" name="email" id=""placeholder='Your email address' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}
