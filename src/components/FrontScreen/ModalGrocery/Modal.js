import React , {useState} from 'react'
import "./Modal.css"
// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Item from "./ModalApi.js/Item"
import Carousel from "react-elastic-carousel";
import { AiOutlineArrowDown } from 'react-icons/ai'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const Modal = () => { 
   const [items , setitem] = useState(Item); 
    return (
        <>
          <div className="food_zone">
              <h1>What do you looking for ?</h1>
              <p>Mauris vitae ultricies leo Integer malesuada nunc vel i arcu cursus</p>
          </div>
          <div className="App" >
          <Carousel breakPoints={breakPoints}>
        {items.map((elem) => {
          const {id , image , category , icon } = elem;
          return (
            <>
            <div className="slider_style">
          <div className="items">
          <div className="item_img" >
          <img src={image} alt="" />
          </div>
             <div className="Item_content"> <h1>{category}</h1>
             </div>
             <div><span>{icon}</span></div>
             </div>
        </div>
            </>
          )
        } )}
       
      
         <div><p><AiOutlineArrowDown /></p></div>

      </Carousel>
    </div>
        </>
    )
}

export default Modal;

