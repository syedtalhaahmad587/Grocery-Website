import React, { useState } from "react";
import "./index.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect } from "react";
import { useRef } from "react";


const NavbarDropdown = ({ dropLink , dropDownData , href_link  , item  , slider_dropdown }) => {
const btnRef = useRef()
  const [dropVisible , setDropVisible ] = useState(false);
  useEffect( () => {
    const closeDropdown = e => {
       if(e.path[0] !==  btnRef.current ) {
         setDropVisible(false);
       }
      };
  
  document.body.addEventListener("click", closeDropdown);
   return () => document.body.removeEventListener("click", closeDropdown )
} ,[]);
  return (
    <>
      <div class={`dropdown ${slider_dropdown}`}>
        <button class={`dropbtn ${dropVisible ? "open_dropdwn" : "close_dropdwn"}  `} ref={btnRef}
          onClick={() => setDropVisible(!dropVisible)}>
          {dropLink} 
          {dropVisible ?<span className="drop_custom_arrow"  > <IoIosArrowUp /> </span> : <span className="drop_custom_arrow" ><IoIosArrowDown /> </span> }
        </button> 
         {dropVisible ? 
        <div class="dropdown-content"> 
           {dropDownData.map((item , index ) => 
                    <ul className="navbr-list">
                    <li key={index}> <a href={item.href_link}>{item.item}</a></li>  
                  </ul> 
            )}   
        </div>
        :null }
      </div>
    </>
  );
};


export default NavbarDropdown;
