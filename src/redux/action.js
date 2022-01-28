import * as types from "../redux/actionTypes";
import {auth ,  createUserWithEmailAndPassword  ,  signInWithEmailAndPassword , signOut  } from "../config/firebase"; 


const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload : user
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload : error
} );

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload : user
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload : error
} );

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload : error
} );





const getData = (data) => ({
    type: "GET_PRODUCT",
    payload: data
})

// const isNumberInc = (item , id ) => ({
//   type: "INC",
//   payload : item,
 
// })

const isNumberDec = (item , id ) => ({
  type: "DEl",
  payload :  item,
  id : id
})
    
const registerInitiate  = ( email , password , firstName) => {
  return function(dispatch)  {
   dispatch(registerStart())
   createUserWithEmailAndPassword(auth , email , password  ).then(({user}) => {
     user.updateProfile({
      firstName,
     });
     dispatch(registerSuccess(user))  
   })
   .catch((error) => dispatch(registerFail(error.message)))
}
} 

const loginInitiate  = ( email , password  ) => {
  return function(dispatch)  {
   dispatch(loginStart())
   signInWithEmailAndPassword(auth , email , password ).then(({user}) => {
     dispatch(loginSuccess(user))
   })
   .catch((error) => dispatch(loginFail(error.message)))
}
} 

const logoutInitiate  = ( email , password) => {
  return function(dispatch)  {
   dispatch(logoutStart())
   signOut(auth).then((respon) =>   dispatch(logoutSuccess()) )
   .catch((error) => dispatch(logoutFail(error.message)))
}

} 

export { getData , isNumberDec , registerInitiate , loginInitiate , logoutInitiate };
