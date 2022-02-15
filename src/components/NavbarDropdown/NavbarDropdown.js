import React, { useState } from "react";
import "./index.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const NavbarDropdown = ({ dropLink , Home , Shop , deal , blog , item, dropDownData }) => {
  // const dropDownData = [
  //   Home = [
  //       "Home",
  //       "Home1",
  //   ],
  //   Shop = [ 
      
  //        "Product",
  //        "Product Details",
  //        "Product Sidebar ",
  //   ],
  //   deal = [
  //        "About",
  //        "Cart",
  //        "Checkout",
  //        "My Account",
  //        "Login Register",
  //        "FAQ",
  //         "Error",
  //   ],  
  //     blog = [
  //          "Blog Grid",
  //          "Blog Standard",
  //          "Blog Details"
  //   ]
  // ]
  console.log(dropDownData);
  const [dropVisible , setDropVisible ] = useState(false);
    // const dropVisible = () => {
    //      setDrop_visible(!drop_visible)
    // } 
  return (
    <>
      <div class="dropdown">
        <button
          class={`dropbtn ${dropVisible ? "open_dropdwn" : "close_dropdwn"}  `}
          onClick={() => setDropVisible(!dropVisible)}
          >
          {dropLink} {dropVisible ?<span className="drop_custom_arrow"> <IoIosArrowUp /> </span> : <span className="drop_custom_arrow" ><IoIosArrowDown /> </span> }
        </button>
         {dropVisible ? 
        <div class="dropdown-content">
           { dropDownData.map((item , index ) => 
                  <li key={index} >{item}</li>
            )}
        </div>
        :"" }
       
      </div>
    </>
  );
};

export default NavbarDropdown;
