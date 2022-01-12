import React from "react";
import Category from "./components/Category";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllCategories from "./components/AllCategories";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Home from "./components/Home";
import './css/headerfooter.scss';
import './css/modal.scss'
import './css/home.scss'

function App() {
  return (
    <>
   
    <Header />
   
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Home />} />
        <Route exact path = "category" element = {<Category />} />
          <Route exact path="allCategories" element={<AllCategories />} />
        </Routes>
      </Router>
      
        <Footer />
    
    </>
  );
}

export default App;
