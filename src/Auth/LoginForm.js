import React, { useContext, useState } from "react";
import { loginUser } from "../api/api";
import { AuthContext } from "./AuthContext";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const { setLoggedInUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const user = await loginUser(email, password);
      setLoggedInUser(user);
      // Redirect or perform desired action upon successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={classes["login-form-container"]}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;
