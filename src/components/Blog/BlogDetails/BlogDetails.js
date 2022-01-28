import React from "react";
import Navbar from "../../Navbar";
import Grocery_screens from "../../AboutScreen/ModalGrocerys/AboutGrocery";
import BlogCategory from "./BlogCategory/BlogCategory";
import Footer from "../../FrontScreen/Footer/Footer";

const BlogDetails = () => {
            return (
                <>
                <Navbar/>
                <Grocery_screens Userheading="Blog Details" heading="Blog Details" gr_pera="pm-griddetails"  />
                 <BlogCategory />
                 <Footer />
                  </>
            )
}

export default BlogDetails;