import React from "react";
import "./Customer.css"
import business from "../../../assets/bussiness.jpg"
import original from "../../../assets/customer_logo.png"
import guarantee from "../../../assets/customer_wrant.png"
import grocery from "../../../assets/groery_video.mp4"

const customer = () => {
    return (
            <>
              <div className="customer">
                 <div className="customer_image" >
                   <img src={business} title="" />
                 </div>
                 <div>  
                    <div className="customer_describtion">
                       <h4>Welcome to EG</h4>
                       <h1>What can a great About Us Page do for your bussiness?</h1>
                        <p className="bussines_peragraph">An About Us page helps your company make a good first impressions, and is critical for building customer trust and  loyality. An About Us page should make sure to cover basic information about the store and its and its founders explain the company's purpose and how it oofers from the compititions and encourage, and encourage discussions and interaction. </p>
                        <p className="bussines_peragraph_2" >lus femi velit sanctus cu, sed at soleat accusata, Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus</p>   
                        <div className="brand_original">
                 <div>
                     <img src={original} />
                 </div>
                 <div>
                     <img src={guarantee}  />
                 </div>
                 </div>
                 <button className="btn_Read_more" >Read More</button>
                   </div> 
                   
                 </div>
                </div>
                <div className="grocery_video">
                    <center> 
                <video controls>
                <source src={grocery} />
                    </video>
                    </center> 
                    </div>  
            </>
    )

}

export default customer; 