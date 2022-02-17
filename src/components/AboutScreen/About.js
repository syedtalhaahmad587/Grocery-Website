import React from "react";
import Navbar from "../Navbar"
import Grocery_screens from "../AboutScreen/ModalGrocerys/AboutGrocery";
import Customer from "../AboutScreen/CustomerBussiness/Customer"
import UserStatisfy from "../AboutScreen/UserStatisfy/UserStatisfy";
import Delivery from '../FrontScreen/DeliverySecurity/Delivery';
import Footer from "../FrontScreen/Footer/Footer";

const AboutPage = () => {
   return (
       <>
       <Navbar className="About_navbar"/>
       <Grocery_screens  heading="About Us" Userheading="About Us" />
       <Customer />
       <UserStatisfy />
        <Delivery  className="delivery_authoritizes"/>
       <Footer /> 
       </>
   )
}
export default AboutPage; 