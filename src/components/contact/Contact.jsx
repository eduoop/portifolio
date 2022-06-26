import React, { useRef } from 'react';
import styles from './Contact.module.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {

  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2eue3qu', 'template_iadid01', form.current, 'ipF8TaMIqVI8k1U26')
    .then((result) => {
      alert('Sua menssagem foi enviada com sucesso!')
      e.target.reset()
  }, (error) => {
    alert('Não foi possivel enviar!')
  });
  };

  setTimeout(() => {
    toast.success('ta indo')
  }, 1000);

  return (
    <section id='contact'>
      <h5>Entre Em Contato</h5>
      <h2>Contate-me</h2>

      <div className={`container ${styles.container_contact}`}>
        <div className={styles.contact_options}>
          <article className={styles.contact_option}>
            <MdOutlineEmail className={styles.contact_option_icon}/>
            <h4>Email</h4>
            <h5>(31) 98262-3783</h5>
            <a href="mailto:eduardomoraesdeveloper@gmail.com" target="_blank">Me mande um email</a>
          </article>
          <article className={styles.contact_option}>
            <BsWhatsapp className={styles.contact_option_icon}/>
            <h4>Whatsapp</h4>
            <h5>31982623783</h5>
            <a href="https://api.whatsapp.com/send?phone=31982623783" target="_blank">Me mande uma menssagem</a>
          </article>
          <article className={styles.contact_option}>
            <FaTelegramPlane className={styles.contact_option_icon}/>
            <h4>Telegram</h4>
            <h5>EduardoDeveloper</h5>
            <a href="https://t.me/EduardoDeveloper" target="_blank">Me mande uma menssagem</a>
          </article>
        </div>
        {/* fim das opções de contato */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Seu Nome Completo' required/>
          <input type="email" name="email" placeholder='Seu Email' required/>
          <textarea name="message" rows="7" placeholder='Sua Menssagem' required></textarea>
          <button type="submit" className={`btn btn-primary`}>Enviar Menssagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact