import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Layout  from '../components/FrontScreen/Layout';
  import AboutPage from "../components/AboutScreen/About";
  import  Product from "../components/ProductScreen/Product";
  import  ProductSidebar from "../components/ProductScreen/ProductSidebar/Productsidebar";
  import  ProductDetail from "../components/ProductScreen/ProductDetials/Productdetail";
  import  ProductCarts from "../components/ProductCarts/ProCarts";
  import  CheckOut from "../components/ProductCheckOut/CheckOut";
  import MyAcount from "../components/MyAcount/Acount";
  import UserLogin  from "../components/LoginPage/UserLogin";
  import RegisterUser from "../components/LoginPage/LoginRegisterPage/RegisterPage/Register";
  import ErrorFAQ from "../components/FAQ/ErrorFaq";
  import WebError from "../components/Error404/WebError";
  import BlogGrid from "../components/Blog/BlogGrid/BlogGrid";
  import BlogDetails from "../components/Blog/BlogDetails/BlogDetails";
  import BlogStandard from "../components/Blog/BlogStandard/BlogStandard";
  import ContactPage from "../components/ContactPage/Contact"
  const AppRouter = () => {
    return (
        <Router>
     <div>
     <Routes>
        <Route path="" element={<Layout/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productsidebar" element={<ProductSidebar />} />
        <Route path={`/productdetail/:category/:id`} element={<ProductDetail />} />
        <Route path="cart" element={<ProductCarts />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="acount" element={<MyAcount />} />
        <Route path="/login" element={<UserLogin  />} />
        <Route path="/register" element={<RegisterUser  />} />
        <Route path="/faq" element={<ErrorFAQ  />} />
        <Route path="/error" element={<WebError />} />
        <Route path="/blogGrid" element={<BlogGrid />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/blogStandard" element={<BlogStandard />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
      </div>
      </Router> 
    );
  }

  export default AppRouter;