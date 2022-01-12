import React from "react";
import { useTools } from "../hooks/useTools";
import { FormLogin } from "./FormLogin";
import { ModalWindow } from "./ModalWindow";
import { auth, signOut } from "../firebase/firebaseconfig";

export const Header = () => {
  const { handleClose, handleOpen, open } = useTools();
 
  const user = auth.currentUser;


  const LogOut = () => {
    signOut(auth).then(() => {
      console.log ("Cerraste sesión")
      window.location.reload()
     }).catch((error) => {
       console.log("error")
     });
  }
  
  const renderButon=()=>{ 
    setTimeout(() => user, 1000)
    if(user){
    return  <><p className = "welcome" >Welcome {user.email}</p>
      <button className="close-button" onClick={LogOut}>SignOut</button></>
    } else{
      return  <button className="loginButton" onClick={handleOpen}>
      <img
        src="https://i.ibb.co/KDGYvy2/usuario-1-1.png"
        alt="usuario-1-1"
      />
      Login
    </button>
    }
  }
  


  return (
    <header>
      <nav>
        <img
          className="logo"
          src="https://i.ibb.co/P9cWzMK/Rectangle-3.png"
          alt="Rectangle-3"
        />

        <section className="nav-btns">
          {renderButon() }
          <img
            className="car"
            src="https://i.ibb.co/gMbFBwN/carro-de-la-carretilla-1.png"
            alt="carro-de-la-carretilla-1"
            border="0"
            height={47}
            width={53}
          />
        </section>
      </nav>
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={`Provide username and password`}
      >
        <FormLogin />
      </ModalWindow>
    </header>
  );
};
