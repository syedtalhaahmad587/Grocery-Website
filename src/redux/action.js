import * as types from "../redux/actionTypes";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithCustomToken,
  db,
  set,
  ref,
  get,
  onValue,
} from "../config/firebase";

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

const getData = (data) => ({
  type: "GET_PRODUCT",
  payload: data,
});

const getUserData = (data) => ({
  type: "GET_USER_DATA",
  payload: data,
});

const isNumberDec = (item, id) => ({
  type: "DEl",
  payload: item,
  id: id,
});

const registerInitiate = (data) => {
  const { email, password } = data;
  delete data.confirmPassword;
  return function (dispatch) {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        data.uid = user.user.uid;
        const reference = ref(db, `/users/${data.uid}`);
        set(reference, data).then(() => {
          dispatch(registerSuccess(user));
          alert("User Create Successfully");
        });
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};

const loginInitiate = (data) => {
  const { email, password } = data;
  delete data.confirmPassword;
  return function (dispatch) {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        const reference = ref(db, `/users/${user.user.uid}`);
        onValue(reference, (snapshot) => {
          if (snapshot.exists()) {
            let userObj = snapshot.val();
            userObj.accessToken = user.user.accessToken;
            sessionStorage.setItem("token", userObj.accessToken);
            dispatch(loginSuccess(userObj));
          }
        });
      })
      .catch((error) => dispatch(loginFail(error.message)));
  };
};

const getUser = (token) => (dispatch) => {
  // console.log(getAuth(), "sajs")
  console.log({ token });
  signInWithCustomToken(token)
    .then((res) => console.log(res, "gdsd"))
    .catch((err) => console.log({ err }));
  // auth().sign
  dispatch(getUserData({}));
};

const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    signOut(auth)
      .then((respon) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutFail(error.message)));
  };
};

export {
  getData,
  isNumberDec,
  registerInitiate,
  loginInitiate,
  logoutInitiate,
  getUser,
};
