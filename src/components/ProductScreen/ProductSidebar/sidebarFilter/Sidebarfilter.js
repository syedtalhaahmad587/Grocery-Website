import React, { useState } from "react";
import "./Sidebarfilter.css"
import ProductList from "../../../FrontScreen/DealOffer/ProductList";
import Dropdown from "../../../Dropdown/Dropdown"
import list from '../../../FrontScreen/DealOffer/ProductListApi'

const Sidebarfilter = () => {
   

    return (
        <>
           <div className="filter_item">
             <div>
              <p>Showing 1-12 item</p>
             </div>
             <div className="filterProduct">
             <div>
                 <select className="select_filter" >
                    <option value="0">filter</option>
                    <option value="1">filter</option>
                      <option value="2">filters</option>
                 </select>
             </div> 
                 <select className="select_popularity">
                     <option>popularity</option>
                     <option>popularity</option>
                     <option>popularity</option>
                 </select>
             </div>
            </div>
            <div className="productlist_item" >
                <div>
                   <ProductList  
                   sidebar_row="product_sidebar"
                   sidebar_list="product_sidebar_list" 
                   list={list}

                   />
                </div> 
                 <div className="sidebar_input">
                   < Dropdown />
                 </div>
            </div>
        </>
    )
}
export default Sidebarfilter;