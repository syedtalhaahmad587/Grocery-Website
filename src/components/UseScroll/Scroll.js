import React, { useEffect, useState } from "react"

const Scrool_Bar = (props , showBelow  ) => {
         const [show , setshow] = useState(showBelow ? false : true )
        const handleScroll = ()  => {
            if(window.pageYOffset > showBelow ){
                if(!show) setshow(true) 
            } else {
                if (show) setshow(false)
            }
        }
        const handleClick = () => {
            window['scrollTo']({ top: 0, behavior: "smooth" })
        }
        useEffect(() => {
               if(showBelow){
                  window.addEventListener(`scroll` , handleScroll )
                  return () => window.removeEventListener(`scroll` , handleScroll )
               }
        } ,[] )
    return (
             
        <>
          <span onClick={handleClick}>{props.title}</span>
        </>
    )
} 
export default Scrool_Bar