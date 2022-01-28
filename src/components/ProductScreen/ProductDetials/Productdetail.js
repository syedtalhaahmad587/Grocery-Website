import   React , { useLayoutEffect , useState  } from "react";
import "./Productdetail.css"
import Navbar from "../../Navbar"
import Grocery_screens from "../../AboutScreen/ModalGrocerys/AboutGrocery";
import ProductSelect from "./ProductSelect/ProductSelect"
import OverView from "./ProductOverview/Overview";
import ProList from "../../FrontScreen/DealOffer/ProductListApi";
import ProductList from "../../FrontScreen/DealOffer/ProductList";
import { useParams } from 'react-router-dom';
import Footer from "../../FrontScreen/Footer/Footer";

const ProductDetail = () => { 
   const { category, id } = useParams();
   const [detail, setDetail] = useState({})
   const [viewitem , setviewitem] = useState([]);
   console.log(viewitem);
   useLayoutEffect(() => {
    const updateItems = ProList.filter(item => item.category === category);
    const productDetail = ProList.find(item => item.id == id);
    setDetail(productDetail)
    setviewitem(updateItems);
   }, []) 
   
   return (
       <>
          <Navbar /> 
          <Grocery_screens
            gr_pera="Product_details"
            heading="Product Details" Userheading="Product Details"/>
             <ProductSelect details={detail} />
             <OverView />
             <ProductList list={viewitem} isRelated_product={true} related_heading={true} related_product_item= "related_product_items"  />
            <Footer />
       </> 
   )
}

export default ProductDetail;