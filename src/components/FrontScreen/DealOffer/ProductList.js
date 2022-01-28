import ReactStars from "react-rating-stars-component";
import React, { useState , useEffect, useLayoutEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductList.css";
import ProList from "./ProductListApi";
import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { getData , isNumberInc , isNumberDec } from  "../../../redux/action";
import { useDispatch , useSelector } from "react-redux";
 
const ProductList = (props) => {
  const {in_product , sidebar_row , sidebar_list ,  viewitems , isRelated_product , 
        related_heading , related_product_item, list  } = props
  const navigate = useNavigate();
  // const [related , setrelated ] = useState({viewitems})
  console.log(viewitems)

    
    const cart_product = useSelector(state => state.product)
    console.log(cart_product)
    const [cartcheck, setcartcheck] = useState(0)
    const [addcount , setaddcount] = useState()
    const  [data , setdata] = useState([...list])
     const [btnchg , setbtnchg] = useState(true);
    //  const [list ,setlist] = useState();

    useEffect(() => {
      setdata([...list]);
    }, [list])
     
     useEffect(() => {
       cart_product.map((item , index ) => {
           if(item.id === data[index].id){
             item.count = data[index].count       
            }
               
      } )
     

               },[cart_product]  ) 
       
       
      const dispatch = useDispatch()
    const ratingChanged = (newRating) => {
      };
      const Add_Card = (item , index , operation ) => {  

          data[index].count = item.count ? operation === "inc" ?  item.count + 1 : item.count - 1 : 1;
        setdata([...data ])
        setbtnchg(false) 
          dispatch (
            getData(item) 

            );       
      }

      const routeTo = (id , category  ) => {
        
        navigate(`/productdetail/${category}/${id} `, {search: id , list : category })
        
      //  setdata(updateItems);
      
      }
      
    return (
        <>
         {!related_heading ? <>  {in_product ?
            <div className="food_zone">
                <h1>Best Deals This week! </h1>
                <p>A virtual assistual collects the product from your list</p>
            </div> : null
            } </>  :  <h1 className="product_Related">Related Product</h1>   }
          
              <div  className={`row ${sidebar_row} ${related_product_item}  `}>  
            {data.map((item , index ) => {
                const { image , text , price , rating , id , btn , category  } = item;
                return (
                    <>
                <div className={`product_list ${sidebar_list}` } key={index} onClick={!isRelated_product ? () => routeTo(id , category  ) : () => {}}>
                <div className="product_list_cart"> 
                <div className="img_src"><img src={`${window.location.origin}/${image}`} alt="" /></div>
                <p>{text}</p>
                <h4>{price}</h4>
                <span  className="Stars">
                <ReactStars
                    className="Stars"
                    count={5} 
                    onChange={ratingChanged}
                    value={rating}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"/>
                    </span>
                  { !item.count  ? <div className="Add_to_card">
                       <button  onClick={() =>  Add_Card(item  , index , "inc"  )}>{btn}</button>
                   </div> :  <span className="Add_to_card" >
                   <button className="count_handling"><div className="add_cart_price">
                   <div className="btn_inc" onClick={() =>  Add_Card(item  , index , "dec"  )}><AiOutlineMinusCircle/></div>
                   </div>
                   <div className="collect_cart_count">{item.count}</div> <div className="minus_cart_price">
                   <div className="btn_dec" onClick={() =>  Add_Card(item  , index , "inc" )}><FiPlusCircle/></div>
                   </div></button> </span> }
                               </div>
            </div>
            </>
            )
            } )
          
        }
              
            </div>
            </>
    )
}

export default ProductList;