import React, { useState } from "react"
import statisfy from "./Api";
import "./UserStatisfy.css";
import Scrool_Bar from "../../UseScroll/Scroll"

const UserStatisfy = () => {
    const [data  , setdata] = useState(statisfy)
    console.log(data)
    return (
        <>
          <div>
              <div className="fresh_food">
              <p>Food Is Always Fresh</p>
              <h3>Why Choose Us</h3>
              </div>
              <div className="User_Satisfy">
                  {
                      data.map((item , index ) => {
                          const {id, logo , point , text , btn } = item; 
                          return (
                              <>
                                  <div className="User_Satisfy_item" key={index}>
                        <div className="User_Satisfy_item-detail">
                            <p className="logo_section">{logo}</p>
                            <h4 className="heading_section" >{point}</h4>
                            <p className="pera_section">{text}</p>
                            <button className="button-section" ><Scrool_Bar showBelow={250} title={btn} /></button> 
                            </div> 
                              </div>
                              </>
                          )
                       
                      } )
                  }
                  
              </div>
          </div> 
          

        </>
    )

}

export default UserStatisfy;