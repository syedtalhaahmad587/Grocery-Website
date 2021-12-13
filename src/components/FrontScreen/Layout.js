import React from 'react'
import Navbar from '../Navbar';
import "./Layout.css"
import Modal from "../FrontScreen/ModalGrocery/Modal";
import ProductList from "../FrontScreen/DealOffer/ProductList"
import ShowOffer from "../FrontScreen/offerList/ShowOffer"
import Product from "../FrontScreen/SpecialProduct/Product"
import PublicNews from "../FrontScreen/SpecialNews/PublicNews"
import Delivery from '../FrontScreen/DeliverySecurity/Delivery';
import Footer from "../FrontScreen/Footer/Footer";
const Layout = () => {

    return (
        <>
            <Navbar />
            <div>
                <div className="GroceryImages">
                    <div className="Grocery_Text">
                        <h1>Enjoy Organic Grocery With The <span className="display_block">Best Quality</span></h1>
                        <p>Get Your product delivered at your doorsteps all day everyday</p>
                        <div className="grocery_input">
                            <input type="text" name="search" />
                            <button className="search" name="search" >SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal/>
            <div>
              <ProductList />
            </div>
            <div>
            <ShowOffer /> 
            </div>
            <div>
            <Product/>
            </div>
            <div>
            <PublicNews />
            </div>
            <div>
               <Delivery />
            </div>
            <div>
                <Footer />
            </div>
              
        </>
    )
}
export default Layout;