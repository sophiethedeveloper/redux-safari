import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  // How can we log in? What do we need to do?

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", login)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.payload)
        props.history.push('/creatures')
      })
      .catch((err) => console.log(`Login axiosWithAuth Failed: ${err.response}`));
  };

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1 className="adventure">Let's see some animals that could eat us!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={props.username}
          onChange={handleChange}
          placeholder="username"
          className="input"
        />
        <input
          type="password"
          name="password"
          value={props.password}
          onChange={handleChange}
          placeholder="password"
          className="input"
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
