import React from "react";
import Navbar from "../Navbar"
import Grocery_screens from "../AboutScreen/ModalGrocerys/AboutGrocery";
import ProductItem from "./ProductItem/ProductItem"
import Delivery from '../FrontScreen/DeliverySecurity/Delivery';
import Footer from "../FrontScreen/Footer/Footer";

const Product = () => {
    return (
        <>
         <Navbar className="About_navbar" />
         <Grocery_screens  
         isProduct={true}
         isProduct_home={true}
         className="grocery_product"
         />
         <ProductItem />
         <Delivery  className="delivery_authoritizes"/>
         <Footer />
        </>
    )
}
export default Product;