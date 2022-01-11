import React, { useState } from 'react'
import { BotonPrueba } from './BotonPrueba';
import { ModalWindow } from './ModalWindow';

export const Header = () => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);

    return (
        <div>

            <button onClick={handleOpen}>Pinchame</button>
            <BotonPrueba />
            <ModalWindow open={open} handleClose={handleClose} title={"Login"} />
        </div>
    )
}

