import React from "react";
import Navbar from "../../Navbar";
import Grocery_screens from "../../AboutScreen/ModalGrocerys/AboutGrocery";
import  BlogUserStandard from "./BlogCateory/BlogUserStandard";
import Footer from "../../FrontScreen/Footer/Footer";

const BlogStandard = () => {
            return (
                <>
                <Navbar/>
                <Grocery_screens Userheading="Blog Standard" heading="Blog Standard" gr_pera="pm-grid"  />
                <BlogUserStandard />
                <Footer />
                </>
            )
}

export default BlogStandard;