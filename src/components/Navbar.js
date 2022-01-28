import React , {useState} from 'react'
import "./Navbar.css"
import { FiSearch, FiPhoneCall } from 'react-icons/fi';
import { BsFillCartFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { useSelector } from "react-redux";
import { IoIosArrowDown } from 'react-icons/ai';
import Cart_popup from "../components/Popup_Grocery/Cart_popup";
import logo_Image from "../assets/logo_grocery.png";
import about_logo from "../assets/aboutlogo.png";
import TemporaryDrawer from "../components/SwiptSlider/Swipt"

const Navbar = (props) => {
  const {seachIcon , isHome  , Search  } = props
  // const [quantity, setquantity] = useState(0)
  // const [state, setstate] = useState(initialState)
  // const [qyt, setqyt] = useState(quantity)
  const quantity = useSelector(state => state.quantity)
    const [popup, setpopup] = useState(false);
    const [swipt , setswipt] = useState(false);

  // const cart_data = useSelector(state => state.quantity)
  const show_popup = () => {
        setpopup(!popup)
      } 
   const Swiper = ()  => {
      setswipt(!swipt)
   }
  // console.log(quantity);
  return (
    <>
      <div className={`main_navbar ${props.className}`}>
        <div className="wrapped">
          <div className="flex_1">
            <ul className="un_orderlist">
            {isHome ?
            <>
              <li><button>Home</button></li>
              <li><button>Shop</button></li>
              <li><button>Pages</button></li>
              <li><button>Blogs</button></li>
               <li><button>Contact</button></li>
              <li> <TemporaryDrawer /></li> 
               </> 
              : <img src={about_logo}/>}
            </ul>
          </div>
          <div className="flex_2 ">
            {Search ?  <img src={logo_Image} /> : <>
            <div className='search_flex'>
                 <div className='search_header'> 
               <input type="search" placeholder="Your Email"/>
                       <button>Search</button>
                </div>
                </div>
            </> }
          </div>
          <div className="flex_3">
            <ul className="un_orderlist1">
             {seachIcon ? <li><FiSearch /></li> : null} 
              <li><AiOutlineUser /></li>
              <li onClick={() => Swiper() }><FaBars  /></li>
              <li className="list_item" onClick={() => show_popup() }>  {quantity > 0 ? <span className="use_qty"><button>{   quantity  }</button></span> : null } <BsFillCartFill /></li>
             <li></li>
            </ul>
            <div>
              <p className="Fi_phone"><FiPhoneCall/></p>
            </div>
            <div className="Home_line">
              <h4>Home Line Number</h4>
              <p>+82485+95</p>
            </div>

          </div>
        </div>
      </div>
      {popup ? <Cart_popup /> : "" }
      {swipt ? <TemporaryDrawer /> : "" }

    </>
  )
}

export default Navbar;