import React, { useState } from "react";

export const FormLogin = () => {
  const [value, setValue] = useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form className="form-login">
      <section id="input-container">
      <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button onClick={(e) => {e.preventDefault()}}>Login</button>
      </section>
    </form>
  );
};
