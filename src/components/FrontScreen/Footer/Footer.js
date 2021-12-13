import React from 'react'
import "./Footer.css"
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail  , AiOutlineTwitter } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { RiFacebookLine , RiAppStoreFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
const Footer = () => {
    return (
        <div>
            <div className="main_footer">
                <div className="control_footer">
                  <div className="footer">
                    <div className="EG_shop">
                        <h3>About EG Shop</h3>
                        <p className="peragraph" >EG STORE - worldwide Grocery store<span className="display_block"> since 2021. We sell over 2000+</span> Category products on our web-site  </p>
                        <div className="Location_bar display_flex ">
                            <div className="point">
                                <div className="point1"></div>
                                <div className="point2">
                                    <div className="Address_show display_flex">
                                        <div  className="icon"><BiPhoneCall /></div>
                                        <div className="shop_number"> <p>+880 176 111 456</p>
                                            <p>+880 172 3244 649</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="point1"></div>
                                <div className="point2">
                                    <div className="Address_show  display_flex" >
                                        <div className="icon" ><AiOutlineMail /></div>
                                        <div className="shop_number" ><p>info@example.com</p>
                                            <p>info@support.com</p></div>
                                    </div>
                                </div>
                                <div className="point1"></div>
                                <div className="Address_show  display_flex" >
                                    <div className="icon_email" ><AiOutlineMail /></div>
                                    <div className="shop_number_email" ><p>168/170, Avenue 01, Mirpur</p>
                                        <p>DOHS, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="EG_shops">
                       <img src="images/Logo.png" alt="" />
                       <p>Register Now To Get Update On Promotion And Coupons<span className="display_block">Don't Worry! It's Not Spam</span> </p>
                       <input type="search" placeholder="Your Email"  />
                       <button>Send</button>
                       <div className="App_logo  display_flex">
                          <span className="more_Logo"><RiFacebookLine /></span>
                          <span className="more_Logo"><IoLogoInstagram /></span>
                          <span className="more_Logo"><RiAppStoreFill /></span>
                          <span className="more_Logo"><AiOutlineTwitter /></span>
                          <span className="more_Logo"><RiAppStoreFill /></span>
                       </div>
                    </div>
                    <div className="term_privacy">
                        <h3>Company</h3>
                        <div className="term_privacy_policy" >
                         <p>Privacy Policy</p>
                         <p>Returns</p>
                         <p>Terms & Condition</p>
                         <p>Our Support</p>
                         <p>Term of service</p>
                         <p>CheckOut</p>
                         <p>Other Issues</p>
                         </div>
                    </div>
                    </div>
                     <div className="display_flex   ">
                          <div> 
                              <p>Copyright 2021 EG Shop Grocery I Design By Egens Lab</p>
                          </div>
                          <div>
                               <img src="images/payment.png" alt=""/>
                          </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
