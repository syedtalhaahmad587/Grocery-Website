import React from "react";
import "./Grocerymodal.css"

const Grocery = (props) => {

    return (
        <>
         <div>
                <div className="GroceryImages">
                    <div className="Grocery_Text">
                        <h1>Enjoy Organic Grocery With The <span className="display_block">Best Quality</span></h1>
                        <p>Get Your product delivered at your doorsteps all day everyday</p>
                        <div className="grocery_input">
                            <input type="text" name="search" placeholder='Search your project'  />
                            <button className="search" name="search"  >SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grocery;