import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export const ModalWindow = ({ open, handleClose, title, children }) => {
  return (
    <div>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-container">
          <section id="close-modal">
            <span><img onClick={handleClose} src="https://i.ibb.co/JK1BzMH/icons8-cerrar-ventana-50-1.png" alt="icons8-cerrar-ventana-50-1" /></span>
          </section>
          <section id="title-container">
          <p id="title">{title}</p>
          </section>
          <section>
            {children}
          </section>
        </Box>
      </Modal>
    </div>
  );
};
