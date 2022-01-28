import React , {useState}  from "react"
import {IoIosArrowDown , IoIosArrowUp }  from "react-icons/io";
import "./TextDropdown.css";

const TextDropdown = (props) => {
    const {drop_pera , drop_text } = props
    const [showText , setText ] = useState(false); 
// const [itemList , setItemsList] = useState("Talha")    
const inputlabren = () => {
         setText(!showText)  
    }  
    return (
        <>
        <div>  </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className={`accordion-collapse ${showText ? "accordion-item-open" : "accordion-item-close"}`}   onClick={() => inputlabren()   }  >
            <div className="accordion-wrap">            
              <div className={`rgb-text ${showText ? "accorder_open" : "accorder_close" }`}>{drop_text}</div>
               <div className="svg-icon"> {showText ? <IoIosArrowUp /> : <div><IoIosArrowDown /></div> }</div>  
                </div>

         </button>
        </h2>
        <div className="accordion-collapse-per" >
        <div className="accordion-body">
            {showText ? <div className="prg-pera">{drop_pera}</div> : <></> }
              </div>      
              </div>
              </div>

        </>
    )
} 

export default TextDropdown;