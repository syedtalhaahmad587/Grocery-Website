import * as React from "react";
import { useEffect , useState } from "react";
import "./Swipt.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FaBars } from "react-icons/fa";
import NavbarDropdown from "../NavbarDropdown/NavbarDropdown";
import { BsTruckFlatbed } from "react-icons/bs";
import { FaFacebookF , FaWhatsapp  } from "react-icons/fa"
import  {  FiInstagram ,FiTwitter } from "react-icons/fi";
import TextDropdown from "../DropdownText/TextDropdown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { isNumberDec } from "../../redux/action";

export default function TemporaryDrawer({DrawerBtn , left , screenDrawer , height , screen_TopDrawer  }) {
  const [state, setState] = React.useState({
    left: false,
  });
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { product : cart_product, quantity } = useSelector(state => state.cartReducer);
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
  };
    const dispatch = useDispatch();
  // const  quantity  = useSelector((state) => state.quantity);
  // console.log(quantity);
  const [totalprice, settotalprice] = useState(0);
  const [popup_cart, setpopup_cart] = useState(cart_product);
  const Add_cart = (item, index, operation) => {
    popup_cart[index].count = item.count
      ? operation === "Inc"
        ? item.count + 1
        : item.count - 1
      : 0;
    setpopup_cart([...popup_cart]);
  };

  useEffect(() => {
    let price = 0;
    cart_product.forEach((item) => {
      price += item.count * item.prices;

      return item;
    });

    settotalprice(price);
  }, [cart_product, settotalprice]);

  const checkcart = (e, popup_cart) => {
    e.preventDefault();
    console.log(popup_cart);
    navigate("/cart");
  };

  const toggleDrawer = (anchor, open ) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : height }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      {!screen_TopDrawer ? 
      <>
      {!screenDrawer ?  
      <>
      <List> 
        <h2 className="Eg-grocery-nav-heading">EG SHOP GROCERY </h2>
         </List>
      <Divider />
      <List>
      <TextDropdown drawerSnap="true"
      nmLogin="true"
       accordion_wrap_collapse="accordion_wrap_collapse" 
       DrawerDropdownData={[ { item: "Home", href_link: "/"}  ]} 
      drop_text="Home"  />
      </List>
      <TextDropdown drawerSnap="true"
      nmLogin="true"
       accordion_wrap_collapse="accordion_wrap_collapse" 
       DrawerDropdownData={[
          { item: "Product", href_link: "product" },
          { item: "Product Sidebar",  href_link: "productsidebar", },
          ]} 
        drop_text="Shop"  />
      <List>
      <TextDropdown drawerSnap="true"
      nmLogin="true"
       accordion_wrap_collapse="accordion_wrap_collapse" 
       DrawerDropdownData={[  
        { item: "About", href_link: "about" },
        { item: "Cart", href_link: "cart" },
        { item: "Checkout", href_link: "checkout" },
        { item: "My Account", href_link: "acount" },
        { item: "Register", href_link: "register" },
        { item: "Login", href_link: "login" },
        { item: "FAQ", href_link: "faq" },
        { item: "Error", href_link: "error" },
      ]} 
      drop_text="Pages"  />
        
      </List>
      <TextDropdown drawerSnap="true"
      nmLogin="true"
       accordion_wrap_collapse="accordion_wrap_collapse" 
       DrawerDropdownData={[
        { item: "Blog Grid", href_link: "blogGrid" },
        { item: "Blog Standard", href_link: "blogStandard" },
        { item: "Blog Details", href_link: "blogDetails" },
          ]} 
        drop_text="Blogs"  />
      <List>
        <a className="nav-drop"  href="/contact">Contact</a>
      </List>
      <div className="nav-pera-touch">
      <h3>Get in touch</h3>
      <p>541 Melville Ave, Palo Alto, CA 94301</p>
      <p>connect.us@gmail.com</p>
      <div className="logo-nav-icons"><span className="left-icon" ><FaFacebookF /></span>
      <span className="left-icon" ><FaWhatsapp /></span>
      <span className="left-icon" ><FiInstagram /></span><span className="left-icon" ><FiTwitter/></span></div>
      </div>
      </>
    : <>
    <div>
    <div >
      <List>
      <div className="shopping-cart-header shopping-cart2">
        <BsFillCartFill />
        <span className="badge">{quantity}</span>
        <div className="shopping-cart-total">
          <span className="lighter-text">Total:</span>
          <span className="main-color-text">${totalprice}</span>
        </div>
      </div>
      </List>

      {cart_product.length > 0 ? (
        <div className="cart-npm " > 
          {cart_product.map((item, index) => {
            return (
              <>
                <div className="cart-nprm">
                  <ul className="shopping-cart-items" key={item.id}>
                    <li className="clearfix">
                      <img src={item.image} alt="item1" />
                      <span className="item-name">{item.text}</span>
                      <span
                        className="close_icon"
                        onClick={() => dispatch(isNumberDec(item, item.id))}
                      >
                        <AiOutlineClose />
                      </span>
                    </li>
                  </ul>
                  <div className="product">
                    <div className="Product_check">
                      <span
                        className="product_rate_minus"
                        onClick={() => Add_cart(item, index, "Dec")}
                      >
                        <button>-</button>
                      </span>
                      <span className="product_rate_change">
                        {!item.count ? dispatch(isNumberDec(item, item.id)) : item.count}
                      </span>
                      <span
                        className="product_rate_plus"
                        onClick={() => Add_cart(item, index, "Inc")}
                      >
                        <button>+</button>
                      </span>
                      <span className="product_rate_Multiply">*</span>
                      <span className="product_rupess">{item.prices}</span>
                    </div>
                    <div className="Product_rupees">
                      <p>{item.prices * item.count}</p>
                    </div>
                  </div>
                  <hr className="border_line"></hr>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="cart_empty">
          <img src="images/empty-cart.svg" title="" />
          <p>No items in your cart</p>
        </div>
      )}

      <div className="button checkout-btn ">
        {!cart_product.length == 0 ? (
          <button onClick={(e) => checkcart(e, popup_cart)}>
            Checkout
          </button>
        ) : (
          <button disabled onClick={(e) => checkcart(e, popup_cart)}>
            Checkout
          </button>
        )}
      </div>
    </div>
  </div></> }
  </>
  : <>
  <div className="Top-Drawer" >
    <label>What are you looking for ?</label>
    <span className="search-mobile-input" ><input type="Text"  placeholder="Search Products, Category, Brand"  /></span>
    </div>
  </> }
    </Box>
  );

  return (
    <div>
      {[left].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="btn-faBar" onClick={toggleDrawer(anchor, true)}>
            {" "}
            {/* <FaBars /> */}
            {DrawerBtn}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
