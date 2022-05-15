import React,{useRef} from 'react'
import {MdLocalPhone,MdEmail} from 'react-icons/md'
import {RiWhatsappFill} from 'react-icons/ri'
import emailjs from 'emailjs-com'
import "./Contact.css"

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_or3czmi', 'template_jxby4ho', form.current, 'wDeESNjlmsnop9zHN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='Contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>uze761@gmail.com</h5>
            <a href="mailto:uze761@gmail.com"  target='_blank' rel="noreferrer" className=':valid'>Send me an Email.</a>
          </article>
          <article className='contact__option'>
            <MdLocalPhone className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5><a href="tel:+91-7006914546">+91-7006914546</a></h5>
          </article>
          <article className='contact__option'>
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-7006914546</h5>
            <a href="https://api.whatsapp.com/send?phone=7006914546" target='_blank' rel="noreferrer">Message me.</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Full Name" required/>
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message.'required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>

  )
}

export default Contact