import React, { useState } from "react";
import BlogData from "../BlogProduct/BlogGridApi"
import "./BlogProduct.css";

const BlogProduct = () => {
    const [blogData , setBlogData ] = useState(BlogData)
    console.log(blogData)
    return (
        <>
        <div className="blog-wrap">
            {blogData.map((item , index ) => {
                const {img , title , explain , icon , user , userData  } = item;  
                 return (
                    <div className="row_wrap2 blog-wrap-mr " key={index} >
                    <div className="row_wrap_div2" >
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div className="row_wrap_supermark blog-pera  " >
                            <h6>{title}</h6>
                            <p>{explain}</p>
                            <h6><span>{icon}</span> <span className="Est_">{user}</span>{userData}</h6>
                        </div>
                    </div>
                </div>
                 )
            } ) }
         
                    </div>
           
        </>
    )
};

export default BlogProduct;



