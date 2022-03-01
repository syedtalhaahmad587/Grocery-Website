import { React, useState, useEffect } from "react";
import "./CartTable.scss";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { isNumberDec } from "../../../redux/action";

const CartTable = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
  };

  const { product: product_cart } = useSelector((state) => state.cartReducer);
  console.log(product_cart);
  const dispatch = useDispatch();
  const [popup_cart, setpopup_cart] = useState(product_cart);
  const [ProData, setProData] = useState(false);

  const Add_cart = (item, index, operation) => {
    popup_cart[index].count = item.count
      ? operation === "Inc"
        ? item.count + 1
        : item.count - 1
      : 0;
    setpopup_cart([...popup_cart]);
  };

  return (
    <>
      {!product_cart.length == 0  ?  
      <div class="table-wrapper">
        {screenWidth > 768 ? <>         
         <table class="eg-table table cart-table">
            <thead>
              <tr>
                <th>Delete</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Unite Price</th>
                <th>Discount Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {product_cart.map((item, index) => {
                const { image, text, prices, count } = item;
                return (
                  <>
                    <tr key={index}>
                      <td data-label="Delete">
                        <div class="delete-icon">
                          <TiDeleteOutline
                            onClick={() => dispatch(isNumberDec(item, item.id))}
                          />
                        </div>
                      </td>
                      <td data-label="Image">
                        <img src={image} alt="" />
                      </td>
                      <td data-label="Product Name">{text}</td>
                      <td data-label="Unite Price">
                        <del>${prices}</del>
                      </td>
                      <td data-label="Discount Price">${prices}</td>
                      <td data-label="Quantity">
                        <div class="quantity">
                          <span className="cart-quantity-count  quantity-count">
                            {!count  ?  dispatch(isNumberDec(item, item.id)) : count  }
                          </span>
                          <button className="cart-plus-quantity quantity-plus">
                            <span onClick={() => Add_cart(item, index, "Inc")}>
                              <AiOutlinePlus />
                            </span>
                          </button>
                          <button className="cart-minus-quantity  quantity-minus">
                            <span onClick={() => Add_cart(item, index, "Dec")}>
                              <AiOutlineMinus />
                            </span>
                          </button>
                          <div class="quantity-nav">
                            <div class="quantity-button quantity-up">
                              <i class="bi bi-plus"></i>
                            </div>
                            <div class="quantity-button quantity-down">
                              <i class="bi bi-dash"></i>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td data-label="Subtotal">{item.prices * item.count }</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          </>
        : <>
          <div>
            <table className="table-mobile">
              <tbody>
                  {product_cart.map((item, index) => {
                const { image, text, price, count } = item;
                return (
                  <>
                <tr>
                  <td data-label="Delete">
                    <div class="delete-icon">
                      <TiDeleteOutline
                      onClick={() => dispatch(isNumberDec(item, item.id))}
                      />
                    </div>
                  </td>
                  <td data-label="Image">
                    <img src={image} alt="" />
                  </td>
                  <td data-label="Product Name">
                    {text}
                  </td>
                  <td data-label="Unite Price">
                    <del>{price}</del>
                  </td>
                  <td data-label="Discount Price">{price}</td>
                  <td data-label="Quantity">
                    <div class="quantity">
                      <span className="quantity__count-select-item" >{count}</span>
                      <div class="quantity-nav quantity-nav-bar ">
                        <div class="quantity-button quantity-up"  >
                          <AiOutlinePlus 
                          onClick={() => Add_cart(item, index, "Inc")}
                          />
                        </div>
                        <div class="quantity-button quantity-down">
                          <AiOutlineMinus
                          onClick={() => Add_cart(item, index, "Dec")}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td data-label="Subtotal">{item.price * item.count}</td>
                  </tr>
                  </>
                );
                  })}
                </tbody>
            </table>
          </div>
          </>}
      </div>
 : <center><div className="NoItem">Items Is No Cart?</div></center>  } 
    </>
  );
};

export default CartTable;
