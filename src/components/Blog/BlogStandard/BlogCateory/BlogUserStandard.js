import React , {useState} from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF , FaInstagramSquare , FaTwitter  } from "react-icons/fa";
import { ImPinterest   } from "react-icons/im";
import { AiOutlineClockCircle   } from "react-icons/ai";
import BlogUser from "./UserBlogApi";
import "./BlogUserStandard.scss"

const BlogUserStandard = () => {
  const [ Review , SetReview ] = useState(BlogUser)
    return (
        <>
          <div className="categorys standard-category ">
        <div className="port-img port-standard-img">
                   {Review.map((item => {
                     const {img ,  head ,  review , btn ,  svg1  ,   dateview } = item 
                     return (
                       <>
                       <div className="wrap inl-blog ">
                      <img src={img} alt="" />
                      <div className="succes_store">
                          <div className="lyt-view-blog-text ">
                              <h4>{head}</h4>
                              <p className="pera-about">{review}</p>
                              <div className="blog-content-pera" >
                              <button>{btn}</button>
                              <span className="date blog-data"><span className="svg-content" >{svg1}</span><span>{dateview}</span></span>
                              </div>
                          </div>
                      </div>
                      </div>
                        </>
                      )
                    
                   } ))  }
                    
                
                    
        </div>
        
        <div className="port-category blog-mn-standard ">
          {/* <h2>BLOG CATEGORY</h2> */}
          <aside class="widget-area">
            <div class="widget2">
              <h5 class="title-dash">BLOG CATEGORY</h5>
              <ul class="catgeory-list">
                <li>
                  <a href="#">
                    <div>
                      <BsArrowRight />
                      <span>Fresh</span>
                    </div>
                    <div>
                      <span>03</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <BsArrowRight />
                      <span>Grocery</span>
                    </div>
                    <div>
                      <span>06</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <BsArrowRight />
                      <span>Vegetable </span>
                    </div>
                    <div>
                      <span>05</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <BsArrowRight />
                      <span>Meat &amp; Fish</span>
                    </div>
                    <div>
                      <span>10</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <BsArrowRight />
                      <span>Pet Care</span>
                    </div>
                    <div>
                      <span>09</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <BsArrowRight />
                      <span>Shopping</span>
                    </div>
                    <div>
                      <span>04</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div class="widget2 latest-post">
              <h5 class="title-dash">LATEST POST</h5>
              <ul class="post-list">
                <li class="mb-20">
                  <div class="single-post">
                    <div class="post-img">
                      <a href="blog-detials.html">
                        <img src="ProductImages/blg-grid1.jpg" alt="" />
                      </a>
                    </div>
                    <div class="post-content">
                      <a href="blog-details.html">
                        <h6 class="title-14">
                          The business of delivering restaurant meals to{" "}
                        </h6>
                      </a>
                      <div class="post-date">4th Jan 2021</div>
                    </div>
                  </div>
                </li>
                <li class="mb-20">
                  <div class="single-post">
                    <div class="post-img">
                      <a href="blog-detials.html">
                      <img src="ProductImages/blg-grid3.jpg" alt="" />
                      </a>
                    </div>
                    <div class="post-content">
                      <a href="blog-details.html">
                        <h6 class="title-14">
                          Although these new Internet platfor ms are.
                        </h6>
                      </a>
                      <div class="post-date">4th Jan 2021</div>
                    </div>
                  </div>
                </li>
                <li class="mb-20">
                  <div class="single-post">
                    <div class="post-img">
                      <a href="blog-detials.html">
                      <img src="ProductImages/blg-grid4.jpg" alt="" />
                      </a>
                    </div>
                    <div class="post-content">
                      <a href="blog-details.html">
                        <h6 class="title-14">
                          If the delivery provider maintains all
                        </h6>
                      </a>
                      <div class="post-date">4th Jan 2021</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="single-post">
                    <div class="post-img">
                      <a href="blog-detials.html">
                      <img src="ProductImages/blg-grid5.jpg" alt="" />
                      </a>
                    </div>
                    <div class="post-content">
                      <a href="blog-details.html" class="title-14">
                        The business of delivering restaurant meals to{" "}
                      </a>
                      <div class="post-date">4th Jan 2021</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="widget2">
              <h5 class="title-dash">PRODUCT TAG</h5>
              <ul class="tag-list">
                <li>
                  <a href="#">Casual</a>
                </li>
                <li>
                  <a href="#">Kurtas &amp; Kurtis</a>
                </li>
                <li>
                  <a href="#">Summer</a>
                </li>
                <li>
                  <a href="#">Summer</a>
                </li>
                <li>
                  <a href="#">Winter</a>
                </li>
                <li>
                  <a href="#">Woman</a>
                </li>
                <li>
                  <a href="#">Woman</a>
                </li>
                <li>
                  <a href="#">Man</a>
                </li>
                <li>
                  <a href="#">Coot</a>
                </li>
              </ul>
            </div>

            <div class="widget2">
              <h5 class="title-dash">OUR FOLLOWER</h5>
              <ul class="follower-list">
                <li>
                  <a href="#">
                      <div>
                          <FaFacebookF />
                    <span>
                      <i class="lab la-facebook-f"></i>Facebook
                    </span>
                    </div>
                    <div>
                    <span>50,520</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                      <div>
                          <FaInstagramSquare />
                    <span>
                      <i class="lab la-twitter"></i>Twitter
                    </span>
                    </div>
                    <div>
                    <span>42,035</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                      <div>
                          <FaTwitter />
                    <span>
                      <i class="lab la-instagram"></i>Instagram{" "}
                    </span>
                    </div>
                    <div>
                    <span>3,850</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                      <div>
                          <ImPinterest />
                    <span>
                      <i class="lab la-pinterest"></i>Pinterest
                    </span>
                    </div>
                    <div>
                    <span>10,590</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div class="widget2">
              <h5 class="title-dash">ARCHIVES</h5>
              <ul class="archive-list">
                <li>
                  <a href="#">5th January 2021</a>
                </li>
                <li>
                  <a href="#">26th February 2020</a>
                </li>
                <li>
                  <a href="#">26th August 2020</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
        </>
    )
} 

export default BlogUserStandard;