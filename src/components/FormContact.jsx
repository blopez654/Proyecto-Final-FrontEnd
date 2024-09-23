import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/FormContact.css';

export const FormContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lcm44fi', 'template_gb7s5ty', form.current, {
        publicKey: 'qhGzMF0VRQ4SvXLiH',
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
    
    <div className='contact-page'>
      <h1 className='contact-title'>Contáctanos</h1>
      <form className='FormContact' ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name"></label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          placeholder="Nombre"
          required
        />

        <label htmlFor="user_email"></label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          placeholder="Correo electrónico"
          required
        />

        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          placeholder="Mensaje"
          rows="6"
          required
        />
        <input className='submit-button' type="submit" value="Enviar" />
      </form>

      <div className="social-media">
  
     </div>
     <div>
      <p>
        *Indique Número de pasajeros, Mascotas, lugar de llegada y de salida,
        si se necesita silla para niños.

      </p>
     </div>
    
    </div>
  );
}

export default FormContact;