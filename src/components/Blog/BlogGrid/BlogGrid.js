import React from "react";
import Navbar from "../../Navbar";
import Grocery_screens from "../../AboutScreen/ModalGrocerys/AboutGrocery";
import BlogProduct from "../BlogGrid/BlogProduct/BlogProduct";
import Footer from "../../FrontScreen/Footer/Footer";
const BlogGrid = () => {
    return (
        <>
            <Navbar />  
            <Grocery_screens Userheading="Blog Grid" heading="Blog Grid" gr_pera="pm-blog-grid" />
           <BlogProduct />
           <Footer/>
        </>
    )
} 

export default BlogGrid;
