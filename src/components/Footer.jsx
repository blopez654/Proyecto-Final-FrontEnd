import React from 'react';
import '../styles/Footer.css'; // Asegúrate de crear este archivo con los estilos
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-container">
        {/* Sección de información de contacto */}
        <div className="footer-section contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <p></p>
              <p><strong>Nosara, Guanacaste.</strong></p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <div>
              <p>70559164</p>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <div>
              <p><a href="shuttlepuravida@gmail.com">shuttlepuravida@gmail.com</a></p>
            </div>
          </div>
        </div>
        {/* Sección sobre la empresa */}
        <div className="footer-section about">
          <h4>About the company</h4>
          <p>Somos una empresa de transporte de alta calidad <br />
            Nos caracterizamos por nuestro servicio de calidad <br /> 
            Reserva con nosotros.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/share/ZG7QZWdVziPHCSS6/?mibextid=qi2Omg"><FaFacebookF /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
