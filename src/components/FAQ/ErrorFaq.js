import React from "react"
import Grocery_screens from "../AboutScreen/ModalGrocerys/AboutGrocery";
import Navbar from "../Navbar";
import Footer from "../FrontScreen/Footer/Footer";
import Services from "../FAQ/ServicsFAQ/Services"
import Delivery from "../FrontScreen/DeliverySecurity/Delivery";
const ErrorFAQ = () => {
    return (
        <>
          <Navbar />
          <Grocery_screens  Userheading="FAQ" heading="FAQ" gr_pera="kr-faq"/>
          <Services />
          <Delivery />
          <Footer />
         
        </>
    )
}

export default ErrorFAQ;