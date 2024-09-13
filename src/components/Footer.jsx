import React from 'react';

function Footer(props) {

  console.log(props)
  
  return (
    <div>
      {props.valor} 
    </div>
  );
}

export default Footer;