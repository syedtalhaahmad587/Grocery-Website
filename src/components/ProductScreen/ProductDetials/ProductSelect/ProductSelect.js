import React from "react";
import "./ProductSelect.scss"
import ReactStars from "react-rating-stars-component";
import Scrool_Bar from "../../../UseScroll/Scroll"
// import  Pear from "ProductImages/Pear_vegetable.jpg"
//  import  strawbarry from "ProductImages/Strawbarry.jpg"
//  import  Fruits from "ProductImages/Fruits.jpg"
 

const ProductSelect = (props) => {
    const  { details } = props
    // const ratingChanged = (newRating) => {
    // };
    return (
        <>
          <div className="Select_Product" >
             <div className="Select_image">
                 <div className="choose_img" >
                     <div className="check-gorcery-food" >
                      <img src={`${window.location.origin}/${details.image}`} width="70px" height="70px" />
                     </div>
                     <div className="check-gorcery-food" >
                     <img src={`${window.location.origin}/${details.image1}`} width="70px" height="70px"  />
                     </div>
                     <div className="check-gorcery-food" >
                     <img src={`${window.location.origin}/${details.image2}`} width="70px" height="70px"  />
                     </div>
                 </div>
                 <div className="product_selected_img" >
                    <img src={`${window.location.origin}/${details.image}`} width="350px" height="410px" />
                 </div>
             </div>
            <div className="product_describtion">
                <div className="">
                    <div className="display_flex cart_start" >
                        <div>
                <ReactStars
                    className="Stars"
                    count={5}
                    // onChange={ratingChanged}
                    value={3.5}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"/>
                    </div>
                    <div>
                      <p>(32 Review)</p>
                    </div>
                    </div>
                    <h1>{details.text}</h1>
                    <h4>$41.36</h4>
                    <p>RIBCAGE STR ANK RAINBOW - B lue High-rise straight-leg jeans
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.</p>
                    <p>{details.describtion}</p>
                        <div className="display_flex  product_order" >
                          <div className="cart_count" >
                             <span className="count_price">2</span>
                             <button className="add_price" >+</button>
                             <button className="sub_price" >-</button>
                          </div>
                          <div className="Add_to_cart" >
                              <button><Scrool_Bar showBelow={250} title={details.btn} /></button>
                          </div>
                       </div>
                        <div className="product_colaty" >
                            <h3><span>Product Type: </span>Organic</h3>
                            <h3><span>MFG: </span> July 4.2021</h3>
                            <h3><span>Life: </span> 05 Days</h3>
                            <h3><span>Category: </span> Grocery & Staples</h3>
                        </div>

                </div>
            </div>
          </div>
        </>
    )
}

export default ProductSelect;