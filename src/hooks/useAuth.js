import { useState, useEffect } from 'react'
import {auth, onAuthStateChanged } from '../firebase/firebaseconfig'

export const useAuth = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [user, setUser]= useState();
  
    
   


    return {
        email,
        pass,
        setEmail,
        setPass,
        user
}
}

