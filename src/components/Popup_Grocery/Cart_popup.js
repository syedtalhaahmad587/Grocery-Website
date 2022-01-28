import React , {useEffect, useState} from 'react'
import "./Cart_popup.css"
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { isNumberDec } from  "../../redux/action"
import { useNavigate } from 'react-router-dom';
const Cart_popup = () => {
  const navigate = useNavigate();
  const [totalprice , settotalprice ] = useState(0)
   const cart_product = useSelector(state => state.product);
   console.log(cart_product);
   const dispatch = useDispatch() 
   const quantity = useSelector(state => state.quantity);

   const [popup_cart , setpopup_cart ] = useState(cart_product);
   const  Add_cart = (item , index , operation) => {
    popup_cart[index].count = item.count ? operation === "Inc" ? item.count + 1  : item.count - 1 : 0;
    setpopup_cart([...popup_cart])
   } 

   useEffect(() => {
     let price = 0;
         cart_product.forEach(item  => {
         price +=  item.count * item.price
         
         return item;
       }  )

       settotalprice(price)

   },[cart_product , settotalprice ] )

   const checkcart = ( e , popup_cart)=> {
    e.preventDefault();
     console.log(popup_cart);
    // navigate(`/productcart/${popup_cart}` );
       navigate("productcart");       
   }
   
    return (
        <div>   
   <div className="container">
    <div className="shopping-cart">
    <div className="shopping-cart-header">
    <BsFillCartFill /><span className="badge">{quantity}</span>
      <div className="shopping-cart-total">
        <span className="lighter-text">Total:</span>
        <span className="main-color-text">${totalprice}</span>
      </div>
    </div>

    { cart_product.length > 0 ?
      <div>
   {cart_product.map((item , index ) => {
           return (
               <>
               <div className='cart-nprm' >
    <ul className="shopping-cart-items" key={item.id}> 
      <li className="clearfix">
        
        <img src={item.image}  alt="item1" />
        <span className="item-name">{item.text}</span>
        <span  className='close_icon' onClick={() => dispatch(isNumberDec( item , item.id))}> <AiOutlineClose/> </span> 
        
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
</div>
    </>        
           )        
    } ) }
   </div> :  
   <div className='cart_empty'>
     <img src="images/empty-cart.svg" title='' />
     <p>No items in your cart</p>
    
     </div> }
     
     <div className='button'>
      {!cart_product.length == 0 ?  
     <button  onClick={(e) => checkcart( e , popup_cart) } >Checkout</button>
     : <button  disabled  onClick={(e) => checkcart( e , popup_cart) } >Checkout</button>
    }
     </div>
    
    </div>
 </div> 

        </div>
    )
}

export default Cart_popup;
