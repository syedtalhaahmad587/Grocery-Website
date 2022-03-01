import React from "react";
import Navbar from "../Navbar";
import Grocery_screens from "../AboutScreen/ModalGrocerys/AboutGrocery";
import NavPill from "./NavPill/NavPill";
import Footer from "../FrontScreen/Footer/Footer";
const MyAccount = () => {
    return (
        <>
           <Navbar />
           <Grocery_screens  heading="My Account" Userheading="My Account" gr_pera="product_acount" />
          <NavPill />
          <Footer />
        </>
    )
}

export default MyAccount;