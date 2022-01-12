import React from "react";
import Category from "./components/Category";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllCategories from "./components/AllCategories";

function App() {
  return (
    <>
    <header>
    <Header />
    </header>
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Home />} />
        <Route exact path = "category" element = {<Category />} />
          <Route exact path="allCategories" element={<AllCategories />} />
        </Routes>
      </Router>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
