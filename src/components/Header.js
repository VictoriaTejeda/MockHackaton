import React from "react";
import { useTools } from "../hooks/useTools";
import { FormLogin } from "./FormLogin";
import { ModalWindow } from "./ModalWindow";

export const Header = () => {
  const { handleClose, handleOpen, open } = useTools();
  return (
    <div>
      <button onClick={handleOpen}>Pinchame</button>
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={`Provide username and password`}
      >
          <FormLogin />

      </ModalWindow>
    </div>
  );
};
