import React from "react";
import ReactStars from "react-rating-stars-component";


const ScoreStar = (props) => {
    const ratingChanged = (newRating) => {
    };
    return (
        <>
           <ReactStars
                    className="Stars"
                    count={5} 
                    onChange={ratingChanged}
                    value={props.value}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"/>
        </>
    )
}  

export default ScoreStar;