import React from "react"
import Navbar from "../../Navbar"
import Grocery_screens from "../../AboutScreen/ModalGrocerys/AboutGrocery";
import Sidebarfilter from "./sidebarFilter/Sidebarfilter"
import Delivery from '../../FrontScreen/DeliverySecurity/Delivery';
import Footer from "../../FrontScreen/Footer/Footer";
const ProductSidebar = () => {
    return (
          <>
          <Navbar />
          <Grocery_screens 
          products_heading="productsidebar"
           isProduct_sidebar={true}
           sidebar_heading={true}/>
            <Sidebarfilter />
            <Delivery  className="delivery_authoritizes"/>
            <Footer />
          </>
    )
} 

export default ProductSidebar;