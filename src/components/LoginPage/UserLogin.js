import React from "react";
import Navbar from "../Navbar";
import Grocery_screens from "../AboutScreen/ModalGrocerys/AboutGrocery";
import LoginRegisterPage from "../LoginPage/LoginRegisterPage/LoginRegisterPage";
import Footer from "../FrontScreen/Footer/Footer";
const UserLogin = () => {
    return (
        <>
           <Navbar />
           <Grocery_screens  heading="Login" Userheading="login" gr_pera="login_screen" />
           <LoginRegisterPage />
           <Footer />
        </>
    )
};

export default UserLogin 