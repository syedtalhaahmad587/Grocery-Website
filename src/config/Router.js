import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Layout  from '../components/FrontScreen/Layout';

  const AppRouter = () => {
    return (
        <Router>
     <div>
     <Routes>
        <Route path="" element={<Layout/>} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      </div>
      </Router> 
    );
  }

  export default AppRouter;