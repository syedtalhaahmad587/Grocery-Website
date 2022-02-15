import { useEffect } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppRouter from './config/Router';
import { useDispatch } from "react-redux";
import { getUser } from './redux/action'

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const authToken = sessionStorage.getItem('token');
    if(authToken) {
      dispatch(getUser(authToken));
    }
  },[])

  return (
     <>
       <AppRouter/>
      </>
  )
}

export default App;
