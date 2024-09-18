import React from "react";
import  '../styles/FormPrincipal.css';
import Nosara from '../img/Nosara.jpg';
import Minibus from '../img/Minibus.jpg';
import Minibus2 from '../img/Minibus2.png';


function FormPrincipal() {
  


  return (
    <div className='ContenedorPrincipal'>
        <h1 className='puravida'>PURA VIDA SHUTTLE</h1>

        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Nosara} alt="Nosara" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src={Minibus2} alt="Minibus 2" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src={Minibus} alt="Minibus" className="d-block w-100" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        <h2 className='subti'>¡Con nosotros tendrás un viaje reconfortante!</h2>
        <h3 className='cuerpo'>Manejamos diferentes precios de acuerdo a cada transporte específico</h3>

        <ul className='servicios'>
            <li className='Opcion'>Transporte al Aeropuerto</li>
            <li className='Opcion'>Viajes Privados</li>
            <li className='Opcion'>Traslado Ejecutivo</li>
            <li className='Opcion'>Viajes Largos</li>
            <li className='Opcion'>Traslado de puerta a puerta</li>
        </ul>

        <h3 className='info'>Elige el horario que más te favorezca</h3>
        <h3 className='info'>Haz de tu viaje algo inolvidable con el excelente servicio que brindamos</h3>

        <footer className='footer'>
            <p>David Marín © 2024</p>
            <p>Llámanos: +506 1234 5678</p>
        </footer>
    </div>
);
}

export default FormPrincipal;
