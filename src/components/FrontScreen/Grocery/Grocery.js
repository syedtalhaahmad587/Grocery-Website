import React from "react";
import "./Grocerymodal.scss";

const Grocery = (props) => {

    return (
        <>
         <div>
               <div className="hero-grocery">
                <div className="GroceryImages"></div>
                    <div className="Grocery_Text">
                        <h2>Enjoy Organic Grocery With The <span className="Grocery_Text-display_block">Best Quality</span></h2>
                        <p>Get Your product delivered at your doorsteps all day everyday</p>
                        <div className="grocery_input">
                            <input className="search-field"   type="text" name="search" placeholder='Search your project'  />
                            <button className="search" name="search"  >SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grocery;