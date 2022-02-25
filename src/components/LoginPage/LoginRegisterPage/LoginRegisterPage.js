import React , {useState}  from "react"
import "./LoginRegisterPage.scss"
import LoginPage from "../LoginRegisterPage/LoginPage/LoginPage"
// import RegisterUser from "../LoginRegisterPage/RegisterPage/Register"
import { useNavigate } from "react-router-dom"
const LoginRegisterPage = () => {
    const Navigator = useNavigate();
    return (
        <>
          <div className="Sign_form">
              <center>
              <button onClick={() =>  Navigator("/register")}>Register</button>
              <button>Login</button>
              </center>
          </div>
          <LoginPage />
        </>
    )
} 

export default LoginRegisterPage;