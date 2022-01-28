import React from "react";
import  Navbar  from "../Navbar";
import Grocery_screens from "../AboutScreen/ModalGrocerys/AboutGrocery";
import OrderSummary from "../ProductCheckOut/OrderSummary/OrderSummary";
import Footer from "../FrontScreen/Footer/Footer"
const CheckOut = () => {
    return (
        <>
         <Navbar />
         <Grocery_screens 
            heading="ChecKout" Userheading="Checkout" gr_pera="cart_checkout"
         />
         <OrderSummary  />
         <Footer />
        </>
    )
}

export default CheckOut;