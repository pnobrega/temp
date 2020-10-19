import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../../Controllers/Redux/authSlice";

import "./login.css";

export default () => {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({
    name: "",
    password: "",
  });

  const inputChanged = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value,
    });
  };

  const submit = (event) => {
    dispatch(signIn(formInput));
    event.preventDefault();
  };

  return (
    <div className="login-background">
      <form className="login-form">
        <h1 className="title">Login:</h1>
        <input
          className="input"
          name="name"
          type="text"
          placeholder="name"
          onChange={inputChanged}
          value={formInput.name}
        />
        <input
          className="input"
          name="password"
          type="password"
          placeholder="password"
          onChange={inputChanged}
          value={formInput.password}
        />
        <button className="button" type="submit" onClick={submit}>
          Log In
        </button>
      </form>
    </div>
  );
};
