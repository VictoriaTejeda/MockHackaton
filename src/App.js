import React from "react";
import Category from "./components/Category";
import { Header } from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer"



function App() {
  return (
    <>
      <header><Header /></header>
      <Home />
        <Category />
      <footer><Footer /></footer>
      </>
  );
}

export default App;
