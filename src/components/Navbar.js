import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { FiSearch, FiPhoneCall } from "react-icons/fi";
import { BsFillCartFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/ai";
import Cart_popup from "../components/Popup_Grocery/Cart_popup";
import logo_Image from "../assets/header-1-logo.svg";
import about_logo from "../assets/aboutlogo.png";
import TemporaryDrawer from "../components/SwiptSlider/Swipt";
import { useNavigate } from "react-router-dom";
import TextDropdown from "../components/DropdownText/TextDropdown";
import NavbarDropdown from "./NavbarDropdown/NavbarDropdown";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const {
    user: { currentUser },
    cartReducer: { quantity },
  } = useSelector(state => state);
  // console.log(currentUser)
  const { seachIcon, isHome, Search } = props;
  const [popup, setpopup] = useState(false);
  const [swipt, setswipt] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [loader, setloader] = useState(false);

const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const show_popup = () => {
    setpopup(!popup);
   
  };
  const Swiper = () => {
    setswipt(!swipt);
  };

  return (
    <>
      <div className="vertically">
        <div className="vertically__navigateNavbar">
          <div className="mobile-menu-btn">
            <span className="fw-bold"><TemporaryDrawer DrawerBtn="Menu"  height={250} /></span>
          </div>
            {screenWidth > 639 ? (
              <>
              <div className="logo-screen-lg" ><Link to="/" ><img src={about_logo } /></Link></div>
              <div>
              <div className="flex_3">
                <ul className="un_orderlist1">
                  <li>
                    <FiSearch />
                  </li>
                  {!currentUser.firstName ? (
                    <li onClick={() => navigate("/login")}>
                      <AiOutlineUser />
                    </li>
                    
                  ) : (
                    <div>
                      <TextDropdown
                        nmLogin="true"
                        lgItem="login_dropdown"
                        className="login_collabs"
                        text_className=""
                        home_svg={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="svg-stroke-container"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <g fill="none" fill-rule="evenodd">
                              {" "}
                              <circle
                                cx="12"
                                cy="12"
                                r="12"
                                fill="#f86822"
                                fill-rule="nonzero"
                              ></circle>{" "}
                              <path
                                fill="#FFF"
                                fill-rule="nonzero"
                                d="M13.1818252 12.6666667C15.366281 12.6666667 17.1649879 14.3335701 17.3176726 16.4681904L17.3252836 16.6080555 17.3333337 17.0416667C17.3333337 17.1848516 17.2285728 17.3039382 17.0904223 17.3286342L17.0371901 17.3333333 6.96281056 17.3333333C6.81742783 17.3333333 6.69651331 17.2301562 6.67143827 17.0940941L6.666667 17.0416667 6.666667 16.75C6.666667 14.5418198 8.44636147 12.7430258 10.670143 12.6690344L10.8126768 12.6666667 13.1818252 12.6666667zM12.0000003 6C13.6568546 6 15.0000003 7.34314575 15.0000003 9 15.0000003 10.6568543 13.6568546 12 12.0000003 12 10.3431461 12 9.00000033 10.6568543 9.00000033 9 9.00000033 7.34314575 10.3431461 6 12.0000003 6z"
                              ></path>
                            </g>
                          </svg>
                        }
                        drop_text="Talha"
                      />

                    </div>
                  )}
                  <li>
                    <TemporaryDrawer DrawerBtn={<FaBars />} height={250}  />
                  </li>
                  <li className="list_item" onClick={() => show_popup()}>
                    {quantity > 0 ? (
                      <span className="use_qty">
                        <button>{quantity}</button>
                      </span>
                    ) : null}
                    <BsFillCartFill />
                  </li>
                  <li></li>
                </ul>
              </div>
               </div>
               </>
            ) : (
             <Link to="/"> <img src={about_logo} /></Link>
            )}
         
        </div>
      </div>
      <div className="vertically_bottom">
        <div className="vertically_bottom__navbar-Row">
          <div>
            <FiSearch />
          </div>
          <div>
            <FaBars />
          </div>
          
          <div>
            <span>
              {quantity > 0 ? (
                
               <span className="use_qty use-quantity">
                  <button>{quantity}</button>
                </span>
              ) : null}
              <TemporaryDrawer DrawerBtn={<span className="Cart-logo"><BsFillCartFill/></span>} left="right" screenDrawer={true} height={321}  />
            </span>
          </div>
          <div>
            <FiPhoneCall />
          </div>
        </div>
      </div>

      <div
        className={
          navbar
            ? `main_navbar ${props.className} sticky`
            : `main_navbar ${props.className}`
        }
      >
        <div className="wrapped">
          <div className="flex_1">
            <ul className="un_orderlist">
              {isHome ? (
                <>
                  <li>
                    <NavbarDropdown
                      dropLink="Home"
                      dropDownData={[{ item: "Home", href_link: "/" }]}
                    />
                  </li>
                  <li>
                    <NavbarDropdown
                      dropLink="Shop"
                      dropDownData={[
                        { item: "Product", href_link: "product" },
                        {
                          item: "Product Sidebar",
                          href_link: "productsidebar",
                        },
                      ]}
                    />
                  </li>
                  <li>
                  
                    <NavbarDropdown
                      dropLink="Pages"
                      dropDownData={[
                        { item: "About", href_link: "about" },
                        { item: "Cart", href_link: "cart" },
                        { item: "Checkout", href_link: "checkout" },
                        { item: "My Account", href_link: "acount" },
                        { item: "Register", href_link: "register" },
                        { item: "Login", href_link: "login" },
                        { item: "FAQ", href_link: "faq" },
                        { item: "Error", href_link: "error" },
                      ]}
                    />
                  </li>
                  <li>
                    <NavbarDropdown
                      dropLink="Blogs"
                      dropDownData={[
                        { item: "Blog Grid", href_link: "blogGrid" },
                        { item: "Blog Standard", href_link: "blogStandard" },
                        { item: "Blog Details", href_link: "blogDetails" },
                      ]}
                    />
                  </li>
                  <li className="lgr-contact">
                    <a href="/contact">Contact</a>
                  </li>
                </>
              ) : (
                <img src={about_logo} />
              )}
            </ul>
          </div>
          <div className="flex_2 ">
            {Search ? (
              <span className="header-1-logo">
                <img src={logo_Image} />
              </span>
            ) : (
              <>
                <div className="search_flex">
                  <div className="search_header">
                    <input type="search" placeholder="Your Email" />
                    <button>Search</button>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex_3">
            <ul className="un_orderlist1">
              {!currentUser.firstName ? (
                <li className="login-users"> 
                  <button onClick={() => navigate("/login")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="svg-stroke-container"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle
                          cx="12"
                          cy="12"
                          r="12"
                          fill="#f86822"
                          fill-rule="nonzero"
                        ></circle>
                        <path
                          fill="#FFF"
                          fill-rule="nonzero"
                          d="M13.1818252 12.6666667C15.366281 12.6666667 17.1649879 14.3335701 17.3176726 16.4681904L17.3252836 16.6080555 17.3333337 17.0416667C17.3333337 17.1848516 17.2285728 17.3039382 17.0904223 17.3286342L17.0371901 17.3333333 6.96281056 17.3333333C6.81742783 17.3333333 6.69651331 17.2301562 6.67143827 17.0940941L6.666667 17.0416667 6.666667 16.75C6.666667 14.5418198 8.44636147 12.7430258 10.670143 12.6690344L10.8126768 12.6666667 13.1818252 12.6666667zM12.0000003 6C13.6568546 6 15.0000003 7.34314575 15.0000003 9 15.0000003 10.6568543 13.6568546 12 12.0000003 12 10.3431461 12 9.00000033 10.6568543 9.00000033 9 9.00000033 7.34314575 10.3431461 6 12.0000003 6z"
                        ></path>
                      </g>
                    </svg>
                    <span className="login-user">Login</span>
                  </button>
                </li>
              ) : (
                <div>
                  <TextDropdown
                    nmLogin="true"
                    lgItem="login_dropdown"
                    className="login_collabs"
                    text_className=""
                    home_svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="svg-stroke-container"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="#f86822"
                            fill-rule="nonzero"
                          ></circle>{" "}
                          <path
                            fill="#FFF"
                            fill-rule="nonzero"
                            d="M13.1818252 12.6666667C15.366281 12.6666667 17.1649879 14.3335701 17.3176726 16.4681904L17.3252836 16.6080555 17.3333337 17.0416667C17.3333337 17.1848516 17.2285728 17.3039382 17.0904223 17.3286342L17.0371901 17.3333333 6.96281056 17.3333333C6.81742783 17.3333333 6.69651331 17.2301562 6.67143827 17.0940941L6.666667 17.0416667 6.666667 16.75C6.666667 14.5418198 8.44636147 12.7430258 10.670143 12.6690344L10.8126768 12.6666667 13.1818252 12.6666667zM12.0000003 6C13.6568546 6 15.0000003 7.34314575 15.0000003 9 15.0000003 10.6568543 13.6568546 12 12.0000003 12 10.3431461 12 9.00000033 10.6568543 9.00000033 9 9.00000033 7.34314575 10.3431461 6 12.0000003 6z"
                          ></path>
                        </g>
                      </svg>
                    }
                    drop_text={currentUser.firstName}
                  />
                </div>
              )}
              <li>
                {!Search ? <TemporaryDrawer DrawerBtn={<FaBars />} height={250}  /> : null }
              </li>  
              <li className="list_item">
                
                {" "}
                {quantity > 0 ? (
                  <span className="use_qty">
                    <button>{quantity}</button>
                  </span>
                ) : null}
               <span onClick={() => show_popup()} > <BsFillCartFill /></span>
              </li>
              <li></li>
            </ul>
            {screenWidth > 1199 ? 
            <>
            <div>
              <p className="Fi_phone">
                <FiPhoneCall />
              </p>
            </div>
            <div className="Home_line">
              <h4>Home Line Number</h4>
              <p>+880 176 1111 456</p>
            </div>
          </> 
          : null }
          </div>
        </div>
      </div>
      {popup ? <Cart_popup /> : ""}
      {swipt ? <TemporaryDrawer DrawerBtn={<FaBars />} height={250}  /> : ""}
    </>
  );
};

export default Navbar;
