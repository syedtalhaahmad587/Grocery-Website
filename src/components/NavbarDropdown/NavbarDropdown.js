import React, { useState } from "react";
import "./index.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const NavbarDropdown = ({ dropLink , dropDownData , href_link }) => {

  const [dropVisible , setDropVisible ] = useState(false);
  return (
    <>
      <div class="dropdown">
        <button
          class={`dropbtn ${dropVisible ? "open_dropdwn" : "close_dropdwn"}  `}
          onClick={() => setDropVisible(!dropVisible)}
          >
          {dropLink} 
          {dropVisible ?<span className="drop_custom_arrow"> <IoIosArrowUp /> </span> : <span className="drop_custom_arrow" ><IoIosArrowDown /> </span> }
        </button>
         {dropVisible ? 
        <div class="dropdown-content">
           {dropDownData.map((item , index ) => 
                    <ul className="navbr-list">
                  <a href={href_link} ><li key={index}>{item}</li></a>
                  </ul>
            )}
        </div>
        :null }
      </div>
    </>
  );
};

export default NavbarDropdown;
