import React from "react";
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
   <Home/>
    <Footer />
    </>
  );
}

export default App;
