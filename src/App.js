
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppRouter from './config/Router';
import { Provider } from "react-redux";
import {store} from "./redux/store"
function App() {
  return (
     <>
     <Provider store={store}>
       <AppRouter/>
       </Provider>
      </>
  )
}

export default App;
