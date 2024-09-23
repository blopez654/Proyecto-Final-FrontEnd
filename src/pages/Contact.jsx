import React from "react";
import Map from '../components/Map'
import Header from '../components/Header';
import { FormContact } from '../components/FormContact'
import "../styles/Contact.css"
import Footer from "../components/Footer";

function Contact() {
  
  return(
    <>
    <Header />
    <div className="contenedorContact">
     <div>
     <FormContact />
     </div>
     <div>
    <Map />
    </div>
    </div>
    <Footer />
    </>
  )

}
export default Contact;