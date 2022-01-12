import React, { useState } from "react";
import {auth, signInWithEmailAndPassword } from '../firebase/firebaseconfig'


export const FormLogin = () => { 

//const [value, setValue] = useState("Controlled");
const [email, setEmail] = useState("");
const [pass, setPass] = useState("");
const handleEmail = (e) => setEmail(e.target.value);
const handlePassword = (e) => setPass(e.target.value);

// const handleChange = (event) => {
//   setValue(event.target.value);
//   console.log(event.target.value);
// };

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, pass)
  .then((user) => {
   
    const userEmail = user.user.email;
    console.log(userEmail)
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  });
  };

  



  return (
    <form className="form-login" onSubmit={handleLogin} >
      <section id="input-container">
      <input type="text" placeholder="Email"  onChange={handleEmail}/>
        <input type="password" placeholder="Password" onChange={handlePassword}/>
        <button>Login</button>
      </section>
    </form>
  );
};
