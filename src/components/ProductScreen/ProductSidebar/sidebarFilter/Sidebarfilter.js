import React, { useState } from "react";
import "./Sidebarfilter.scss"
import ProductList from "../../../FrontScreen/DealOffer/ProductList";
import Dropdown from "../../../Dropdown/Dropdown"
import list from '../../../FrontScreen/DealOffer/ProductListApi'
// import { BsArrowRight } from "react-icons/bs"
import { BsArrowRight } from 'react-icons/bs';
import ScoreStar from "../../../ReactScoreStar/ScoreStar"
const Sidebarfilter = () => {
   

    return (
        <>
           <div className="filter_item">
             <div>
              <p>Showing 1-12 item</p>
             </div>
             <div className="filterProduct">
             <div>
                 <select >
                    <option value="0">filter</option>
                    <option value="1">filter</option>
                      <option value="2">filters</option>
                 </select>
             </div> 
                 <select>
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
                 <div className="widget2 qzm-list">
              <h5 className="explore-dash">ExpLore</h5>
              <ul className="catgeory-list">
                <li>
                  <a href="#">
                    <div>
                      <BsArrowRight />
                      <span>Fresh</span>
                    </div>
                    <div>
                      <span>03</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <BsArrowRight />
                      <span>Grocery</span>
                    </div>
                    <div>
                      <span>06</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <BsArrowRight />
                      <span>Vegetable </span>
                    </div>
                    <div>
                      <span>05</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <BsArrowRight />
                      <span>Meat &amp; Fish</span>
                    </div>
                    <div>
                      <span>10</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <BsArrowRight />
                      <span>Pet Care</span>
                    </div>
                    <div>
                      <span>09</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <BsArrowRight />
                      <span>Shopping</span>
                    </div>
                    <div>
                      <span>04</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="widget2 latest-post">
              <h5 className="explore-dash">TOP SALE</h5>
              <ul className="post-list">
                <li className="mb-20">
                  <div className="single-post">
                    <div className="post-img">
                      <a href="blog-detials.html">
                        <img src="ProductImages/grown_vegatable.jpg" alt="" />
                      </a>
                    </div>
                    <div className="post-content">
                        <h6 className="title-14 organic-vr">
                        Fresh Organic Grocery Product
                        </h6>
                        <p>
                             < ScoreStar value="3.5" />
                        </p>
                      <div className="post-date"><del className="old-price">$45.34</del><span className="new-price mk-1" >$35.34</span></div>
                    </div>
                  </div>
                </li>
                <li className="mb-20">
                  <div className="single-post">
                    <div className="post-img">
                      <a href="blog-detials.html">
                      <img src="ProductImages/vegatable_basket.jpg" alt="" />
                      </a>
                    </div>
                    <div className="post-content">
                        <h6 className="organic-vr">
                        Fresh Organic Grocery Product
                        </h6>
                        <p> < ScoreStar value="3.5" /> </p>
                      <div className="post-date"><del className="old-price">$45.34</del><span className="new-price mk-1" >$35.34</span></div>
                    </div>
                  </div>
                </li>
                <li className="mb-20">
                  <div className="single-post">
                    <div className="post-img">
                      <a href="blog-detials.html">
                      <img src="ProductImages/coffee_Grain].jpg" alt="" />
                      </a>
                    </div>
                    <div className="post-content">
                        <h6 className="organic-vr">
                        Fresh Organic Grocery Product
                        </h6>
                        <p> < ScoreStar value="3.5" /> </p>
                      <div className="post-date"><del className="old-price">$45.34</del><span className="new-price mk-1" >$35.34</span></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-post">
                    <div className="post-img">
                      <a href="blog-detials.html">
                      <img src="ProductImages/vegetable1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="post-content">
                      <span className="organic-vr">
                        Fresh Organic Grocery Product
                      </span>
                      <p> < ScoreStar value="3.5" /></p>
                      <div className="post-date"><del className="old-price">$45.34</del><span className="new-price mk-1" >$35.34</span></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="widget2">
              <h5 class="explore-dash">PRODUCT TAG</h5>
              <ul class="tag-list">
                <li>
                  <a href="#">Food </a>
                </li>
                <li>
                  <a href="#">Organic</a>
                </li>
                <li>
                  <a href="#">Coffe</a>
                </li>
                <li>
                  <a href="#">100% Dry </a>
                </li>
                <li>
                  <a href="#">Fresh</a>
                </li>
                <li>
                  <a href="#">Bag</a>
                </li>
                <li>
                  <a href="#">Vegetable</a>
                </li>
                <li>
                  <a href="#">Green</a>
                </li>
              </ul>
            </div>

                 </div>
            </div>
        </>
    )
}
export default Sidebarfilter;