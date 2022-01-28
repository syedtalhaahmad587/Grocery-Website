import React from "react"
import "./ListOffer.css"

const ShowOffer = () => {
    return (
        // style={{backgroundImage: `url("./assets/DairyEggs.jpg")`}}
        <div className="row_list" >
              <div className="backGround_1">
                  <h4>Fresh</h4>
                  <h2>DAIRY AND EGGS</h2>
                  <p>Lorem Ipsum ultricles leo integer malesuada</p>
                  <button>Shop Now</button>
              </div>
              <div className="backGround_2">
              <h4>Fresh</h4>
                  <h2>VEGETABLE BASKET</h2>
                  <p>Lorem Ipsum ultricles leo integer malesuada</p>
                  <button>Shop Now</button>
            </div>
              <div className="backGround_3">
              <h4>Fresh</h4>
                  <h2>VEGETABLE</h2>
                  <p>Lorem Ipsum ultricles leo integer malesuada</p>
                  <button>Shop Now</button>
              </div>
        </div>
    )
}

export default ShowOffer
