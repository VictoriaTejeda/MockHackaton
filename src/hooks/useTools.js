import React, { useState } from "react";

export const useTools = () => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  
  return {
      handleOpen, 
      handleClose,
      open,

  };
};
