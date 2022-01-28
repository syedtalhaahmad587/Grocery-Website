import React from 'react';
import "./Delivery.css";
import {FaShippingFast} from "react-icons/fa"
import { BiSupport } from "react-icons/bi"
import {GiPayMoney } from "react-icons/gi"
import {RiSecurePaymentFill } from "react-icons/ri"


const Delivery = (props) => {
    return (
        <div>
             <div className={`main_wrap ${props.className}`}>
                 <div className="wrap_shipping">
                     <div className="wrap_order">
                            <span className="shipping"><FaShippingFast/></span>
                            <h4>Fast Free shipping</h4>
                            <p>Around the world</p>
                     </div>
                 </div>
                 <div className="wrap_shipping">
                     <div className="wrap_order">
                     <span className="shipping" ><BiSupport /></span>
                     <h4>24/7 Supports</h4>
                     <p>Contact us 24 hours</p>
                     </div>
                 </div>
                 <div className="wrap_shipping">
                     <div className="wrap_order">
                     <span className="shipping" ><BiSupport /></span>
                     <h4>100% Money Back</h4>
                     <p>Guarantee of money retun</p>
                     </div>
                 </div>
                 <div className="wrap_shipping">
                     <div className="wrap_order">
                     <span className="shipping" ><GiPayMoney/></span>
                     <h4>100% secure Payment</h4>
                     <p>Your Magment are Safe with us</p>
                     </div>
                 </div>
             </div>  
        </div>
    )
}

export default Delivery
