import React from "react";
import Navbar from "../Navbar"
// import "./ProductCarts.css"
import Grocery_screens from "../AboutScreen/ModalGrocerys/AboutGrocery";
import  CartTable from "../../components/ProductCarts/CartTable/CartTabe";
import Coupon from "../../components/ProductCarts/ProductCoupon/Coupon";
import Footer from "../../components/FrontScreen/Footer/Footer";
import { useSelector } from "react-redux";
import { useLocation, useParams } from 'react-router-dom';
// import { Location } from "react-router-dom";
const ProductCarts = () => {
   return (
       <>
       <Navbar />
       <Grocery_screens  heading="Cart" Userheading="Cart" gr_pera="cart_info" />
       <CartTable />
       {/* <Coupon /> */}
       <Footer />
       </>
   )
}


export default ProductCarts;