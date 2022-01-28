import React from "react";
import Modal from "../../FrontScreen/ModalGrocery/Modal"
import ProductList from "../../FrontScreen/DealOffer/ProductList"
import list from "../../FrontScreen/DealOffer/ProductListApi"


const ProductItem = () => {
    return (
        <>
          <ProductList list={list} in_product={false} className="row_product_screen" />
          <ProductList list={list} />
        </>
    ) 
}
export default ProductItem;