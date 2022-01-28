import React, { useLayoutEffect, useState } from "react";
import "./Overview.css";
import view_data from "./OverVeiwApi";
import ReactStars from "react-rating-stars-component";
import Scrool_Bar from "../../../UseScroll/Scroll"


const  OverView = () => {
    const [discribtion , setdescribtion ] = useState(false);
   
   

  const description = () => {
    setdescribtion(false)
  }

  const View = () => {
     setdescribtion(true)

  } 
 
   const [VeiwData , setVeiwData ] = useState(view_data) 
    return (
        <>
        <h1 className="product_shedual">Product Details</h1>
            <div  className="dispaly_flex veiw_details">
                <div className="veiw_details_btn" >
                   <button  onClick={() => description() }>Discription</button>
                   <button  onClick={() =>  View() }>Our Review <span>(2)</span></button>
                </div>
                {!discribtion ? 
                 <div className="veiw_details_text" >
                   <p>Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenatis leo et dictum finibus. Nulla vulputate dolor sit amet tristique dapibus. Maecenas posuere luctus leo, non consequat felis ullamc orper non. 
                       Aliquam erat volutpat. Donec vitae porta enim. Cras eu volutpat dolor, vitae accumsan tellus. Donec pulvinar auctor nunc, et gravida elit porta non. Aliquam erat volutpat. Proin facilisis interdum felis, sit amet pretium purus feugiat ac. Donec in leo metus. Sed quis dui nec justo ullamcorper molestie. Mauris consequat lacinia est, eget tincidunt leo ornare sed</p>
                  <p>Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenatis leo et dictum finibus dapi bus Maecenas posuere luctus leo, non consequat felis ullamcorper non.</p>
                </div> :  
                <div className="veiw_details_text">
                    {VeiwData.map((item , index) => {
                        const {img , heading , date , starValue , text , like , lovly , reply } = item 
                        return (
                         <div className="veiw-list klg-comment"  key={index} >
                          <div className="display_flex product_view_data ">  
                              <div className="view_img">
                              <img src={`${window.location.origin}/${img}`} width="200px" height="200px"  />
                              </div>
                              <div className="view_name">
                              <p>{heading} {date}</p>
                              <p><ReactStars
                    className="Stars"
                    count={5}
                    // onChange={ratingChanged}
                    value={3.5}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"/></p>
                              </div>
                          </div>
                          <p className="view_pera">{text}</p>
                          <div className="view_comment">
                          <ul>
                              <li className="view_comment_like"><Scrool_Bar showBelow={250} title={like} /></li>
                              <li className="view_comment_lovely"><Scrool_Bar showBelow={250} title={lovly} /></li>
                              <li className="view_comment_reply" ><Scrool_Bar showBelow={250} title={reply} /></li>
                          </ul>
                          </div>
                      </div>
                        )
                    } )  }
                    </div>
                            }
                    </div>
                     <div className="veiw_details_user">  
                    <h1>Leave A Comment</h1>
                     <p className="view_pera" >Your email address will not be published. Required fields are marked *</p>
                     <div className="display_flex veiw_details_feilds">
                         <div className="veiw_details_input1">
                         <label> Your Name </label> 
                         <input  placeholder="Your Name" type="text"/>
                         </div>
                         <div className="veiw_details_input2" >
                         <label>Email </label> 
                         <input placeholder="Your email" type="text" />
                         </div>
                          </div>
                          <div className="veiw_details_textarea">
                         <textarea  placeholder="your message" />
                         </div>
                         <p className="veiw_rating">Your Rating</p>
                         <span> <ReactStars
                    count={5}
                    className="view-star"
                    // onChange={ratingChanged}
                    // value={rating}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"/></span>
                        <button className="view_btn"><Scrool_Bar showBelow={250} title="Post Comment"/></button>
                         </div>
                         
                   </>
    )
}

export default OverView;