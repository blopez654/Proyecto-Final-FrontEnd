import React from "react";
import '../styles/FormInicio.css';
import Playa from '../img/playa.jpg';
import Clientes from '../img/Clientes.png';
import Minibus from '../img/Minibus.jpg';



function FormInicio() {
  

  return (
    <div className='FormInicio'>
        <div className="banner">
            <img className='banner-image' src={Playa} alt="Playa" />
            <div className="overlay">
                <h1 className='main-title'>Viaja cómodo, seguro y sin preocupaciones con Pura Vida Shuttle.</h1>
            </div>
        </div>
        <div className='content'>
            <section className='section'>
                <h2 className='subtitle'>
                    Somos una empresa de transportes turísticos de alta calidad, 
                    caracterizados por brindar un servicio seguro con altos estándares. 
                    Nuestros choferes son bilingües y conocedores de la zona.
                </h2>
            </section>
            <section className='section'>
                <h2>Conductores capacitados, vehículos con seguro. <br />
                    Reservas personalizadas, adaptables a horarios y necesidades especiales.
                </h2>
            </section>
            <section className='cta'>
                <h3>Ofrecemos transporte privado en Guanacaste, con atención personalizada y puntualidad garantizada.</h3>
                <button className='cta-button'>Ver Servicios</button>
            </section>
            <section className='benefits'>
                <p>
                    Algunos beneficios de usar nuestro transporte privado incluyen: <br />
                    Flexibilidad, privacidad y personalización del viaje a sus preferencias.
                </p>
            </section>
            <div className='images'>
                <img className='image' src={Minibus} alt="Minibus" />
                <img className='image' src={Clientes} alt="Clientes" />
            </div>
        </div>
    </div>
)
}

export default FormInicio;