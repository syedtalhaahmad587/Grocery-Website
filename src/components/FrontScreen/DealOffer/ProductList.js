import ReactStars from "react-rating-stars-component";
import React, { useState , useEffect} from 'react';
import "./ProductList.css"
import ProList from "./ProductListApi"
import { FiPlusCircle } from "react-icons/fi"
import { AiOutlineMinusCircle } from "react-icons/ai"
import { getData , isNumberInc , isNumberDec } from  "../../../redux/action"
import { useDispatch , useSelector } from "react-redux";
 
const ProductList = () => {
    const cart_product = useSelector(state => state.product)
    const  [data , setdata] = useState(ProList)
    console.log(data.length.id)
     const [btnchg , setbtnchg] = useState(true);
     const [list ,setlist] = useState()
    //  const [count , setcount ] = useState( cart_count);
    // const cart_count = useSelector(state => state.product)
    // console.log(cart_count)
    useEffect(() => {
        if(cart_product.length) {
              cart_product.map((item) => {
                    if(item.id === data.id ){
                        item.count = data.count

                    }
                    return item;
              } )
        } 
    }, [cart_product])
    //  console.log(cart_count)
       
       
    //  console.log(cart_count)
      const dispatch = useDispatch()
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      const Add_Card = (item , index , operation ) => {  

          console.log({item})
          data[index].count = item.count ? operation === "inc" ?  item.count + 1 :item.count - 1 : 1;
        // console.log([index])
        setdata([...data ])
        setbtnchg(false) 
        // data[index]
        //      setbtnchg(false);
          dispatch (
            getData(item) 

            );       
      }
 
    return (
        <>
          
            <div className="food_zone">
                <h1>Best Deals This week! </h1>
                <p>A virtual assistual collects the product from your list</p>
            </div>
            <div  className="row">  
           
            {data.map((item , index ) => {
                const {image , text , price , rating , id , btn   } =  item;
                return (
                    <>
                <div className="product_list" key={index}>
                <div className="product_list_cart" > 
                <div className="img_src"><img src={image} alt="" /></div>
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
                  { !item.count   ? <div className="Add_to_card">
                       <button  onClick={() =>  Add_Card(item  , index , "inc"  )}>{btn}</button>
                   </div> :  <span className="Add_to_card" >
                   <button className="count_handling"><div className="add_cart_price">
                   <div className="btn_inc"  onClick={() =>  Add_Card(item  , index , "dec"  )}><AiOutlineMinusCircle/></div>
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
