import React from "react"
import "./AboutGrocery.css"
import { MdKeyboardArrowRight } from "react-icons/md"


const Grocery_screens = (props) => {
  const {
    className, 
    products_heading,  
    product_cart_info,
    checkOut_screen,
    Login_Screen,
    Userheading,
    heading,
    gr_pera 
  } = props
    return (
        <>
       
          <div className="Grocery_background"> 
              <div className="Abouts_Us">
              <h1 className={`Abouts_Us_screen ${className ? className : "default" }`}  >{"About Us" ? heading : "" }</h1>
                <div className={`grocery_about ${gr_pera}`} >
                     <p>Home</p>
                     <span><MdKeyboardArrowRight /></span>
                     <p>{"Product Details" ? Userheading : "" }</p>       
                  </div>                     
                </div>
          </div>
        </>
    )
}
export default Grocery_screens;