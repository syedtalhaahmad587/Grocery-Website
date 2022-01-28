import ReactStars from "react-rating-stars-component";
import React, { useState } from 'react';
import "./Product.css"
import ProList from "./ProductApi"

const Product = () => {
    const  [data , setdata] = useState(ProList)
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <>
          
            <div className="food_zone food-grocery">
                <h1>Our Special Product</h1>
                <p>A virtual assistual collects the product from your list</p>
            </div>
            <div  className="row">  
           
            {data.map((item) => {
                const {image , text , price , rating} =  item;
                return (
                    <>
                <div className="product_list">
                <div className="product_list_carts" > 
                <div className="img_src"><img src={image} alt="" /></div>
                <p>{text}</p>
                <h4>{price}</h4>
                <span  className="Stars">
                <center>
                <ReactStars
                    className="Stars"
                    count={5}
                    onChange={ratingChanged}
                    value={rating}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"/>
                    </center>
                </span>
            </div>
            </div>
            </>
            )
            } )
          
        }
              
            </div>
        </>
    )
}

export default Product;
