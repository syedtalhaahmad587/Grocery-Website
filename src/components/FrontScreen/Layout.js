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
import Grocery from "../FrontScreen/Grocery/Grocery";
import list from './DealOffer/ProductListApi'
const Layout = () => {

    return (
        <>
            <Navbar 
              isHome={true}
               Search={true}
               seachIcon={true}
               About_navbar={false} 
               
            />
            <div>
              <Grocery />
              </div>
              <div>
            <Modal />
            </div>
            <div>
                <ProductList list={list} />
            </div>
            <div>
                <ShowOffer />
            </div>
            <div>
                <Product />
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