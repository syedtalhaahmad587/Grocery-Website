import React from 'react'
import "./PublicNews.css"
import { FaRegUser } from "react-icons/fa"
const PublicNews = () => {
    return (
        <div>
            <div className="row_wrap">
                <div className="wrap">
                    <img src="images/gooddelivery.jpg" alt="" />
                    <div className="succes_store">
                        <div className="succes_store_grocery">
                            <h4>The name of your grocery store can make or break its success</h4>
                            <p className="pera">Krem you have a new grocery store opening up and...</p>
                            <button>Read More </button>
                            <span className="date">Date 25jun 2021</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row_wrap2">
                        <div className="row_wrap_div2" >
                            <div>
                                <img src="images/delivery.jpg" alt="" />
                            </div>
                            <div className="row_wrap_supermark">
                                <h3>Couple holding paper bag with grocery from supremarket in kitche</h3>
                                <p>1 must explain to you how all this mistaken</p>
                                <h6><span><FaRegUser /></span> <span className="Est_"> Esther Howard</span>-10th Aug 2020</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row_wrap2">
                        <div className="row_wrap_div2">
                            <div>
                                <img src="images/couple.jpg" alt="" />
                            </div>
                            <div className="row_wrap_supermark">
                                <h3>Couple holding paper bag with grocery from supremarket in kitche</h3>
                                <p>1 must explain to you how all this mistaken</p>
                                <h6><span><FaRegUser /></span><span className="Est_">Esther Howard </span> -10th Aug 2020</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicNews
