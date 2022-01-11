import React, { useState } from 'react'
import { ModalWindow } from './ModalWindow'

export const BotonPrueba = () => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={handleOpen}>boton 2</button>
            <ModalWindow open={open} handleClose={handleClose} title={"Boton Prueba"} />
        </div>
    )
}
