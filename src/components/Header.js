import React, { useState } from 'react'
import { BotonPrueba } from './BotonPrueba';
import { ModalWindow } from './ModalWindow';
import '../index.css';


export const Header = () => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className ='header'>
             <img className ='logo' src="https://i.ibb.co/P9cWzMK/Rectangle-3.png" alt="Rectangle-3" border="0"  />
             <div className= 'navButtons'> 
            <button className ='loginButton' onClick={handleOpen}> <img src="https://i.ibb.co/KDGYvy2/usuario-1-1.png" alt="usuario-1-1" border="0" /> 
            Login</button>
            {/* <BotonPrueba /> */}
            <ModalWindow open={open} handleClose={handleClose} title={"Login"} />
            <img className='car' src ="https://i.ibb.co/gMbFBwN/carro-de-la-carretilla-1.png" alt="carro-de-la-carretilla-1" border="0"
            height= {47} width= {53}/>
            </div> 
            </nav>

            
           
        </>
    )
}

