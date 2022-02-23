import React from "react";
import Navbar from "../Navbar";
import "./WebError.scss"
import Grocery_screens from "../AboutScreen/ModalGrocerys/AboutGrocery"; 
import Footer from "../FrontScreen/Footer/Footer";
import { Link } from 'react-router-dom';
// import { IoArrowUndoOutline } from 'react-icons/io';
const WebError = () => {
  return (
    <>
      <Navbar />
      <Grocery_screens
        Userheading="Error Page"
        heading="404"
        gr_pera="kr-faq"
      />
      <div className="ur--error">
        <div className="error-image">
        <img  src="Erorrimg/error.png" className="error-image"  title="" />
        </div>
        <div class="error-content">
          <h1>there’s nothing here</h1>
          <p class="para">
            The page you are looking for may have been renamed or does nost
            exist in this server you will be redirected to homepage shortly
          </p>
          <Link to="/">< span class="eg-btn primary--btn error-btn">
           Back Home
          </span></Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebError;
