import React , {useState} from 'react'
import "./Navbar.css"
import { FiSearch, FiPhoneCall } from 'react-icons/fi';
import { BsFillCartFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { useSelector } from "react-redux";
import Cart_popup from "../components/Popup_Grocery/Cart_popup"

const Navbar = () => {
  // const [quantity, setquantity] = useState(0)
  // const [state, setstate] = useState(initialState)
  // const [qyt, setqyt] = useState(quantity)
  const quantity = useSelector(state => state.quantity)
    const [popup, setpopup] = useState(false)

  // const cart_data = useSelector(state => state.quantity)
  const show_popup = () => {
        setpopup(!popup)
      } 
   
  // console.log(quantity);
  return (
    <>
      <div className="main_navbar">
        <div className="wrapped">
          <div className="flex_1">
            <ul className="un_orderlist">
              <li><button>Home</button></li>
              <li><button>Shop</button></li>
              <li><button>Pages</button></li>
              <li><button>Blogs</button></li>
              <li><button>Contact</button></li>
            </ul>
          </div>
          <div className="flex_2">
            <p>Pakistan</p>
          </div>
          <div className="flex_3">
            <ul className="un_orderlist1">
              <li><FiSearch /></li>
              <li><AiOutlineUser /></li>
              <li><FaBars /></li>
              <li className="list_item" onClick={() => show_popup() }><span className="use_qty"><button  >{quantity}</button></span><BsFillCartFill /></li>
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

    </>
  )
}

export default Navbar;