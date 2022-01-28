import React from 'react';
import Navbar from '../Navbar';
import Grocery_screens from '../AboutScreen/ModalGrocerys/AboutGrocery';
import Published from "../ContactPage/PublishedPage/Published";
import Address from "../ContactPage/Branchdetails/Address";
import Footer from '../FrontScreen/Footer/Footer';
const ContactPage = () =>  {
    return (
        <>
          <Navbar />
          <Grocery_screens  heading="Contact" Userheading="Contact" gr_pera="prk-contact"  />
         <Published />
         <Address />
         <Footer />
        </>
    )
} 

export default ContactPage;