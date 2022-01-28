import  React from "react";
import  "./OrderSummary.css"

const OrderSummary = () => {
    return  (
        <>
          <section className="checkout-section pt-100 pb-100">
<div className="row_billing g-4 " style={{marginLeft:"8rem" , marginRight:"8rem" }} >
<div className="col-lg-7">
<div className="form-wrap box--shadow mb-30">
<h4 className="title-25 mb-20">Billing Details</h4>
<form>
<div className="row_billing">
<div className="col-lg-6">
<div className="form-inner">
<label>First Name</label>
<input type="text" name="fname" placeholder="Your first name" />  
</div>
</div>
<div className="col-lg-6">
<div className="form-inner">
<label>Last Name</label>
<input type="text" name="fname" placeholder="Your last name"/>  
</div>
</div>
<div className="col-12">
<div className="form-inner">
<label>Country / Region</label>
<input type="text" name="fname" placeholder="Your country name"/>
</div>
</div>
<div className="col-12">
<div className="form-inner">
<label>Street Address</label>
<input type="text" name="fname" placeholder="House and street name"/>
</div>
</div>
<div className="col-12">
<div className="form-inner">
<select style={{display: "none"}}>
<option>Town / City</option>
<option>Dhaka</option>
<option>Saidpur</option>
<option>Newyork</option>
</select>
</div>
</div>
<div className="col-12">
<div className="form-inner">
<input type="text" name="fname" placeholder="Post Code"/>
</div>
</div>
<div className="col-12">
<div className="form-inner">
<label>Additional Information</label>
<input type="text" name="fname" placeholder="Your Phone Number"/>
</div>
</div>
<div className="col-12">
<div className="form-inner">
<input type="email" name="email" placeholder="Your Email Address"/>
</div>
</div>
<div className="col-12">
<div className="form-inner">
<input type="text" name="postcode" placeholder="Post Code"/>
</div>
</div>
<div className="col-12">
<div className="form-inner">
<textarea name="message" placeholder="Order Notes (Optional)" rows="6"></textarea>
</div>
</div>
</div>
</form>
</div>
<div className="form-wrap box--shadow">
<h4 className="title-25 mb-20">Ship to a Different Address?</h4>
<form>
<div className="row_billing">
<div className="col-md-6">
<div className="form-inner">
<label>First Name</label>
<input type="text" name="fname" placeholder="Your first name"/>
</div>
</div>
<div className="col-md-6">
<div className="form-inner">
<label>Last Name</label>
<input type="text" name="fname" placeholder="Your last name"/>
</div>
</div>
<div className="col-12">
<div className="form-inner">
<textarea name="message" placeholder="Order Notes (Optional)" rows="3"></textarea>
</div>
</div>
</div>
</form>
</div>
</div>
<aside className="col-lg-5">
<div className="added-product-summary mb-30">
<h5 className="title-25 checkout-title">
Order Summary
</h5>
<ul className="added-products">
<li className="single-product d-flex justify-content-start">
<div className="product-img">
<img src="productImages/Strawbarry.jpg" alt=""/>
</div>
<div className="product-info">
<h5 className="product-title"><a href="#">Organic Vegetable grains</a></h5>
<div className="product-total d-flex align-items-center">
<div className="quantity">
<input type="number" min="1" max="90" step="10" value="1"/>
<div className="quantity-nav">
<div className="quantity-button quantity-up">
<i className="las la-plus"></i>
</div>
<div className="quantity-button quantity-down">
<i className="las la-minus"></i>
</div>
</div>
</div>
<strong> <i className="bi bi-x-lg px-2"></i>
<span className="product-price">$22.36</span>
</strong>
</div>
</div>
<div className="delete-btn">
<i className="las la-times"></i>
</div>
</li>
<li className="single-product d-flex justify-content-start">
<div className="product-img">
<img src="productImages/Strawbarry.jpg" alt=""/>
</div>
<div className="product-info">
<h5 className="product-title"><a href="#">Fresh Vegetable Eggplant</a></h5>
<div className="product-total d-flex align-items-center">
<div className="quantity">
<input type="number" min="1" max="90" step="10" value="1"/>
<div className="quantity-nav">
<div className="quantity-button quantity-up">
<i className="las la-plus"></i>
</div>
 <div className="quantity-button quantity-down">
<i className="las la-minus"></i>
</div>
</div>
</div>
<strong> <i className="bi bi-x-lg px-2"></i>
<span className="product-price">$22.36</span>
</strong>
</div>
</div>
<div className="delete-btn">
<i className="las la-times"></i>
</div>
</li>
<li className="single-product d-flex justify-content-start">
<div className="product-img">
<img src="productImages/Strawbarry.jpg" alt=""/>
</div>
<div className="product-info">
<h5 className="product-title"><a href="#">Fresh Vegetable Eggplant</a></h5>
<div className="product-total d-flex align-items-center">
<div className="quantity">
<input type="number" min="1" max="90" step="10" value="1"/>
<div className="quantity-nav">
<div className="quantity-button quantity-up">
<i className="las la-plus"></i>
</div>
<div className="quantity-button quantity-down">
<i className="las la-minus"></i>
</div>
</div>
</div>
<strong> <i className="bi bi-x-lg px-2"></i>
<span className="product-price">$22.36</span>
</strong>
</div>
</div>
<div className="delete-btn">
<i className="las la-times"></i>
</div>
</li>
</ul>
</div>

<div className="summery-card cost-summery mb-30">
<table className="table cost-summery-table">
<thead>
<tr>
<th>Subtotal</th>
<th>$128.70</th>
</tr>
</thead>
<tbody>
<tr>
<td className="tax">Tax</td>
<td>$5</td>
</tr>
<tr>
<td>Total ( tax excl.)</td>
<td>$15</td>
</tr>
<tr>
<td>Total ( tax incl.)</td>
<td>$15</td>
</tr>
</tbody>
</table>
</div>

<div className="summery-card total-cost mb-30">
<table className="table cost-summery-table total-cost">
 <thead>
<tr>
<th>Total</th>
<th>$162.70</th>
</tr>
</thead>
</table>
</div>

<form className="payment-form">
<div className="payment-methods mb-50">
<div className="form-check payment-check">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label className="form-check-label" for="flexRadioDefault1">
Check payments
</label>
<p className="para">Please send a check to Store Name, Store Street, Store Town, Store State
/
County, Store Postcode.</p>
</div>
<div className="form-check payment-check">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked=""/>
<label className="form-check-label" for="flexRadioDefault2">
Cash on delivery
</label>
<p className="para">Pay with cash upon delivery.</p>
</div>
<div className="form-check payment-check paypal d-flex flex-wrap align-items-center">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked=""/>
<label className="form-check-label" for="flexRadioDefault3">
PayPal
</label>
<img src="images/payment.png" alt=""/>
<a href="#" className="about-paypal">What is PayPal</a>
</div>
<div className="payment-form-bottom d-flex align-items-start">
<input type="checkbox" id="terms"/>
<label for="terms">I have read and agree to the website <br />  <a href="#">Terms and
conditions</a></label>
</div>
</div>
<div className="place-order-btn">
<button type="submit" className="primary--btn lg--btn">Place Order</button>
</div>
</form>
</aside>
</div>
</section>
        </>
    )
}

export default OrderSummary;