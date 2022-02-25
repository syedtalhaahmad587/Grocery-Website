import React from "react";
import "./Coupon.scss"


const Coupon = () => {
    return (
        <>
        <div className="row_1">
          <div className="row_1 g-4">
        <div className="col-lg-4">
          <div className="coupon-area">
            <div className="cart-coupon-input">
              <h5 className="coupon-title">Coupon Code</h5>
              <form className="coupon-input d-flex align-items-center">
                <input type="text" placeholder="Coupon Code" />
                <button type="submit">Apply Code</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <table className="table total-table">
            <thead>
              <tr>
                <th>Cart Totals</th>
                <th></th>
                <th>$128.70</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shipping</td>
                <td>
                  <ul className="cost-list text-start">
                    <li>Shipping Fee</li>
                    <li>Total ( tax excl.)</li>
                    <li>Total ( tax incl.)</li>
                    <li>Taxes</li>
                    <li>Shipping Enter your address to view shipping options. </li>
                    <li><a href="#">Calculate shipping</a></li>
                  </ul>
                </td>
                <td>
                  <ul className="single-cost text-center">
                    <li>Fee</li>
                    <li>$15</li>
                    <li></li>
                    <li>$15</li>
                    <li>$15</li>
                    <li>$5</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td></td>
                <td>$162.70</td>
              </tr>
            </tbody>
          </table>
          <div className="cart-btn-group">
            <a href="checkout.html" className="eg-btn primary--btn proceed-btn">
              Proceed to Checkout
            </a>
            <a href="product.html" className="eg-btn shopping-btn">
              Continue to shopping
            </a>
          </div>
        </div>
      </div>
      </div>
        </>
    )
}

export default Coupon;
