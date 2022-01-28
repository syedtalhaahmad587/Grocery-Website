import React, { useState  , useEffect } from "react";
import { AiFillFacebook, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector  } from "react-redux";
import { loginInitiate } from "../../../../redux/action";


const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initailState = {
    email : "",
    password : "",
  }
  const [obj  , setobj ] = useState(initailState);
  
  const { currentUser } = useSelector((obj) => obj.user);
  useEffect(() => {
    if(currentUser) {
        navigate("/");
    } 
  }, [currentUser, navigate  ] );

  const change_input = (value , property) => {
    setobj({...obj , [property] : value  })
        
  }

  const login = (e) => {
    e.preventDefault();
    if(!obj.email || !obj.password ){
      return;
    }
    dispatch(loginInitiate(obj.email, obj.password ))
    setobj(initailState)
  }

   
  return (
    <>
      <div className="form-wrap box--shadow user_vr_page">
        <h3 className="title-30 text-center mb-35 user_title">
          Login Your Account
        </h3>
        <form className="login-form" onSubmit={(e) => login(e)} >
          <div className="">
            <div className="col-12">
              <div className="form-inner">
                <label>Email*</label>
                <input type="text" value={obj.email}  name="fname" placeholder="Email" onChange={(e) =>  change_input(e.target.value , "email") }  />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner hidden-icon">
                <label>Password *</label>
                <input type="password" value={obj.password}  name="name" placeholder="abcdef*****" onChange={(e) => change_input(e.target.value , "password") }  />
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner d-flex justify-content-between">
                <label className="container-checkbox">
                  Remember Me
                  {/* <input type="checkbox" checked="checked" />  */}
                  <span className="checkmark"></span>
                </label>
                {/* <button className="forget-password">Forgotten password?</button> */}
              </div>
            </div>
            <div className="col-12">
              <div className="form-inner">
                <button className="primary--btn login-btn text-uppercase" onClick={login} >
                  login ACCOUNT
                </button>
              </div>
            </div>
            <div className="col-12">
              <div className="form-choice-area">
                <p className="text-uppercase">or Sign up WITH</p>
                <div className="wrap_row g-3 justify-content-center">
                  <div className="col-md-6">
                    <div className="eg-btn social-btn bg-light-blue">
                      <span className="sigup_svg">
                        <AiOutlineUsergroupAdd />
                      </span>
                      Signup whit google
                    </div>
                  </div>
                  <div className="col-md-6">
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
    </>
  );
};

export default LoginPage;
