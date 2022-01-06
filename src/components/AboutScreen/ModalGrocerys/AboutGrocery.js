import React from "react"
import "./AboutGrocery.css"
import { MdKeyboardArrowRight } from "react-icons/md"


const Grocery_screens = (props) => {
  const {isProduct , isProduct_home , className , products_heading , isProduct_sidebar , sidebar_heading , isProduct_detail ,  isProduct_text  } = props
    return (
        <>
          <div className="Grocery_background">
              <div className="Abouts_Us">
              
              {!isProduct_detail ?  !sidebar_heading ? !isProduct ?<h1 className="Abouts_Us_screen" >
                About Us</h1> : <h1 className={`Abouts_Us_screen ${className}`}  >Product</h1> 
                : <h1 className={`Abouts_Us_screen ${className ? className : "default" }`}  >Product Sidebar</h1> 
                 : <h1 className={`Abouts_Us_screen ${className ? className : "default" }`}  >Product Details</h1> }

                <div className={`grocery_about ${products_heading}`} >
                     <p>Home</p>
                     <span><MdKeyboardArrowRight /></span>
                     { !isProduct_text ? !isProduct_sidebar ? !isProduct_home ? <p>About Us</p>  : <p>Product</p> : <p  >Product Sidebar</p> : <p  className={`${className}`}>Product Details</p>  }     
                  </div>                     
                </div>
               
          </div>
        </>
    )
}
export default Grocery_screens;