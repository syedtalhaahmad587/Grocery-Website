import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Layout  from '../components/FrontScreen/Layout';
  import AboutPage from "../components/AboutScreen/About";
  import Product from "../components/ProductScreen/Product"
  import ProductSidebar from "../components/ProductScreen/ProductSidebar/Productsidebar"
  import  ProductDetail from "../components/ProductScreen/ProductDetials/Productdetail"
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
      </Routes>
      </div>
      </Router> 
    );
  }

  export default AppRouter;