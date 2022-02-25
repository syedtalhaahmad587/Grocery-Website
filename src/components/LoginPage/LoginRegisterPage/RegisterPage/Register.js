import React, { useEffect, useState } from "react";
import "./Register.scss";
import { AiFillFacebook, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Grocery_screens from "../../../AboutScreen/ModalGrocerys/AboutGrocery";
import Footer from "../../../FrontScreen/Footer/Footer";
import Navbar from "../../../Navbar";
import { useNavigate  , useHistory } from "react-router-dom";
import { useDispatch, useSelector  } from "react-redux";
import { registerInitiate } from "../../../../redux/action"




const RegisterUser = () => {
 
  const initailState = {
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : ""
    
  }
  const [object , setObject] = useState(initailState);
  
  const dispatch = useDispatch();    
  const navigate = useNavigate();    

  // const { user: { loading, success } } = useSelector(state => state);
  // console.log({loading, success})
  // useEffect(() => {
  //   if(success) {
  //       navigate("/login");
  //   } 
  // }, [success, navigate ]);

  const changeobj = ( value , property ) => {
    setObject({...object , [property] : value });
  }
  const login = (e) => {
    e.preventDefault();
        if(object.password !== object.confirmPassword){
          return;
        }  
          dispatch(registerInitiate(object))
          setObject(initailState);
  }
  
  const Navigator = useNavigate();
  return (
    <>
      <Navbar />
      <Grocery_screens
        heading="Register"
        Userheading="register"
        gr_pera="sigup_screen"
      />
      <div className="Sign_form">
        <center>
          <button>Register</button>
          <button onClick={() => Navigator("/login")}>Login</button>
        </center>
      </div>
      <div className="form-wrap box--shadow user_vr_page form-regis-mn">
        <h3 className="title-30 text-center mb-35 user_title ">
          Register Your Account
        </h3>
        <form className="login-form" onSubmit={(e) => login(e) } >
          <div className="r">
            <div className="col-12">
              <div className="form-inner">
                <label>First Name*</label>
                <input type="text"  value={object.firstName} name="fname" placeholder="Your first name" onChange={(e) =>  changeobj(e.target.value , "firstName") }  />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <label>Last Name*</label>
                <input type="text" value={object.lastName}  name="lname" placeholder="Your last name"  onChange={(e) =>  changeobj(e.target.value , "lastName") }  />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <label>Email *</label>
                <input type="email" value={object.email}  name="name" placeholder="Your Email" onChange={(e) =>  changeobj(e.target.value , "email") }  />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner hidden-icon">
                <label>Password *</label>
                <input type="password" value={object.password}  name="name" placeholder="abcdef*****"  onChange={(e) =>  changeobj(e.target.value , "password")} />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner hidden-icon">
                <label>Confirm Password *</label>
                <input type="password" value={object.confirmPassword}  name="name" placeholder="abcdef*****" onChange={(e) =>  changeobj(e.target.value , "confirmPassword")}  />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <label className="container-checkbox">
                  I agree to the Terms &amp; Policy
                  {/* <span><input type="checkbox" checked="checked" /></span>  */}
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <button className="primary--btn login-btn" onClick={login} >
                  CREATE AN ACCOUNT
                </button>
              </div>
            </div>
            <div className="col-12">
              <div className="form-choice-area">
                <p className="text-uppercase">or Sign up WITH</p>
                <div className="wrap_row g-3 wrap-login-page">
                  <div className="col-md-6 col-mobile-5">
                    <div className="eg-btn social-btn bg-light-blue gl-btn">
                      <span className="sigup_svg">
                        <AiOutlineUsergroupAdd />
                      </span>
                      Signup whit google
                    </div>
                  </div>
                  <div className="col-md-6 col-mobile-5">
                    <div className="eg-btn social-btn bg-facebook">
                      <span className="facbook_svg">
                        <FaFacebookF />
                      </span>
                      Sign up whit facebook
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RegisterUser;
