import React from "react";
import { useTools } from "../hooks/useTools";
import { FormLogin } from "./FormLogin";
import { ModalWindow } from "./ModalWindow";

export const Header = () => {
  const { handleClose, handleOpen, open } = useTools();
  return (
    <header>
      <nav>
        <img
          className="logo"
          src="https://i.ibb.co/P9cWzMK/Rectangle-3.png"
          alt="Rectangle-3"
        />
        
        <section className="nav-btns">
          <button className="loginButton" onClick={handleOpen}>
          <img
              src="https://i.ibb.co/KDGYvy2/usuario-1-1.png"
              alt="usuario-1-1"
            />
            Login
          </button>

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

/*} <div>
      <button onClick={handleOpen}>Pinchame</button>
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={`Provide username and password`}
      >
          <FormLogin />
      </ModalWindow>
  </div>*/
