import React , {useState}  from "react";
import "./BlogCategory.scss";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF , FaInstagramSquare , FaTwitter  } from "react-icons/fa";
import { ImPinterest   } from "react-icons/im";
import { AiOutlineClockCircle   } from "react-icons/ai";
import view_data from "../../../ProductScreen/ProductDetials/ProductOverview/OverVeiwApi";
import Scrool_Bar from "../../../UseScroll/Scroll";
import ReactStars from "react-rating-stars-component"; 
import grocery from "../../../../assets/groery_video.mp4";

 
const BlogCategory = () => {
  const [VeiwData , setVeiwData ] = useState(view_data) 
  return (
    <>
      <div className="categorys blog-port-category ">
        <div className="port-img blog-port-img">
          <img src="ProductImages/blg-grid7.jpg" title="" />
          <div className="categorys-gorcery">
              <div><p>Grocery</p></div>
              <div>
                 {/* <span><AiOutlineClockCircle/></span> */}
                 <span className="details-pera">Date 25 Jan 2021</span>
              </div>
          </div>
          <div>
           <h3 className="title-28 mb-20">The name of your grocery store can make or break its success.</h3>
           <h5 className="title-20 mb-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id est laborum</h5>
           <p className="para mb-30">Gochujang ugh viral, butcher pabst put a bird on it meditation austin craft beer banh mi. 
               Distillery ramps af, gochujang hell of VHS kitsch austin. 
               Vegan air plant trust fund, poke sartorial ennui next level photo booth coloring book etsy green juice meditation austin craft beer.</p> 
               </div>
               <div className="category-delivery">
                   <p className="mb-25">If the delivery provider maintains all the standards then it is
                     safe to have get products delivered to you. It is hard to maintain but still safer to 
                   get your products ordered</p>
                   <h5 className="quote-author" >-Leslie Alexander-</h5>
               </div>
               <div className="para mb-30 rb-10">
                   <p >"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                         magnam aliquam quaerat voluptatem."</p>
               </div>
               <div className="grocery-demaen grocery-vines ">
                   <div className="popup-video">
                   <video controls>
                <source src={grocery} />
                    </video>
                   </div>
                   <div className="video-content" >
                       <p className="para mb-24 conet-set" >
                     Nemo enim ipsam voluptatem quia voluptas sit is it aspernatur aut odit aut fugit, quia conse quu ntur magni dolores eos qui ratione volupt atem sequi dda sds nesciunt.
                     Neque porro quisquam est, ed quia non numquam eius modi tempora incidunt ut labore et dolore</p>
                    <h5 className="title-20 fw-bold conet-pera">Excepteur sint occaecat cupidatat non proident, sunt.</h5>
                   </div>
               </div>
               <div>
               <h5 class="eg-title3 fw-bold mb-24">How can have anything you ant in life if you ?</h5>
               <p class="para mb-18">Fashion ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione </p>
               <p class="para mb-40 mb-90 ">Fashion ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</p>
               </div>

               <div className="veiw_details_text">
               <h5 class="title-25">Our 2 Comments </h5>
                    {VeiwData.map((item , index) => {
                        const {img , heading , date , starValue , text , like , lovly , reply } = item 
                        return (
                         <div className="klg-comment"  key={index} >
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
                    <div className="veiw_details_user blog-details-rp mb-90">  
                    <h1>Leave A Comment</h1>
                     <p className="view_pera" >Your email address will not be published. Required fields are marked *</p>
                     <div className="display_flex veiw_details_feilds">
                         <div className="veiw_details_input1 blog-input">
                         <label> Your Name </label> 
                         <input  placeholder="Your Name" type="text"/>
                         </div>
                         <div className="veiw_details_input2 blog-input">
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
                    
        </div>
        
        <div className="port-category blog-category">
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
  );
};

export default BlogCategory;
