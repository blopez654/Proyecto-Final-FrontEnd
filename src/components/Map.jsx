import React from "react";


const Map = () => {
  return (
    <div className='Map'>
      <h1>Ubicación: Edunámica Nosara</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1624.502901880167!2d-85.64191829413178!3d9.974976023135556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e5376f7f4cc09%3A0xa723a345ff5e4179!2sEdun%C3%A1mica%20Nosara!5e1!3m2!1ses-419!2scr!4v1726262664045!5m2!1ses-419!2scr"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de Edunámica Nosara"
      ></iframe>
    </div>
  );
};

export default Map;