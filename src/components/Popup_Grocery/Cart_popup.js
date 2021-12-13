import React , {useState} from 'react'
import "./Cart_popup.css"
import { useSelector } from "react-redux";
import { BsFillCartFill } from 'react-icons/bs';
const Cart_popup = () => {
   const cart_product = useSelector(state => state.product)
   console.log(cart_product)
   const quantity = useSelector(state => state.quantity)
  const totalPrice = useSelector(state => state.totalPrice)
   const [popup_cart , setpopup_cart ] = useState(cart_product);
   const  Add_cart = (item , index , operation) => {
    popup_cart[index].count = item.count ? operation === "Inc" ? item.count + 1  : item.count - 1 : 1; 
    setpopup_cart([...popup_cart])
     console.log(item);
     
    
   } 
    return (
        <div>   
   <div className="container">
    <div className="shopping-cart">
    { cart_product.length > 0 ?
      <div>
    <div className="shopping-cart-header">
    <BsFillCartFill /><span className="badge">{quantity}</span>
      <div className="shopping-cart-total">
        <span className="lighter-text">Total:</span>
        <span className="main-color-text">${totalPrice}</span>
      </div>
    </div>

   
   {cart_product.map((item , index ) => {
           return (
               <>
    <ul className="shopping-cart-items" key={index}> 
      <li className="clearfix">
        <img src={item.image}  alt="item1" />
        <span className="item-name">{item.text}</span>
        {/* <span className="item-price">{item.price}</span> */}
        {/* <span className="item-quantity">{item.rating}</span> */}
      </li>
    </ul>
    <div className='product'>
    <div className='Product_check'>
         <span className='product_rate_minus' onClick={() => Add_cart(item , index ,"Dec")}><button>-</button></span>
         <span className='product_rate_change'>{item.count}</span>
         <span className='product_rate_plus' onClick={() => Add_cart(item , index ,"Inc")} ><button>+</button></span>
         <span className='product_rate_Multiply'>*</span>
         <span className='product_rupess'>{item.price}</span> 
</div>
<div className='Product_rupees'>
    <p>{item.price * item.count }</p>
 </div>
 
</div>
<hr className='border_line'></hr>
    </>        
           )        
    } ) }
    <a href="#" className="button">Checkout</a>
    </div>
    : "Sorry your cart is currently empty"}
  </div>
</div> 
        </div>
    )
}

export default Cart_popup;
