import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./TextDropdown.scss";
import CustomModal from "../LPopup/RPopup";

const TextDropdown = ({
  drop_pera,
  drop_text,
  home_svg,
  className,
  text_className,
  lgItem,
  nmLogin,
  accordion_background, 
  accordion_wrap_collapse,
  DrawerDropdownData,
  drawerSnap
}) => {
  const [showText, setText] = useState(false);
  const [drop_lists, setdrop_lists] = useState(true);
  const input_labren = () => {
    setText(!showText);
  };
  const closeDropDown = () => {
    setText(true);
  };

  
  return (
    <>
      <div className={`accordion-item ${lgItem}`}>
        <h2 className="accordion-header">
          <button
            className={`accordion-collapse  ${accordion_wrap_collapse}  ${showText ? accordion_background: "" } `   }
            onClick={() => input_labren()}>
            <div className={`accordion-wrap`}>
              <div 
                className={`rgb-text ${
                  showText ? "accorder_open" : "accorder_close"
                }`}
              >
                <p>{home_svg}</p>
                <p  className={`${ text_className ? text_className : "dropdownText" } `} >   
                   {drop_text}
                </p>
              </div>
              <div className="svg-icon">
                {showText ? (
                  <IoIosArrowUp />
                ) : (
                  <div>
                    <IoIosArrowDown />
                  </div>
                )}
              </div>
            </div>
          </button>
        </h2>
        <div className="accordion-collapse-per">
          <div className="accordion-body" onClick={() => input_labren()}>
            {showText ? (
              <>
                {!nmLogin ? ( 
                  <div className="prg-pera ">{drop_pera}</div>
                ) : (
                  <>
                  {!drawerSnap ?      
                                  <div>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="header_account__dropdown__link">
                            My Order
                          </a>
                        </li>
                        <li>
                          <a className="header_account__dropdown__link">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a className="header_account__dropdown__link">
                            Vouchers
                          </a>
                        </li>
                        <li>
                          <a className="header_account__dropdown__link">
                            Challenges & rewards
                          </a>
                        </li>
                        <hr className="header_account__dropdown__divider" />
                        <li>
                          <a className="header_account__dropdown__link">
                            Help center
                          </a>
                        </li>
                        <li>
                          <button className="header_account__dropdown__link">
                            <CustomModal
                              titleName="Logout"
                              btn_text="CANCEL"
                              btn_text2="LOG OUT"
                              content_pera="Thanks for stopping by. See you again soon!"
                              header_h="Logging out ?"
                              isOpen={showText}
                            />
                          </button>
                        </li>
                      </ul>
                    </div>
                    :      
                                 
                    <ul className="navbar-drawer-list">
                      {DrawerDropdownData.map((item , index ) => 
                    <li key={index} > <a href={item.href_link}>{item.item}</a></li>  
                     )} 
                 </ul> 
                    
                    }

                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};


export default TextDropdown;
