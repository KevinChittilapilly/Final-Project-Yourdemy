import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", userData);
      console.log(response.data);
      // Handle successful login
    } catch (error) {
      console.error("Login error:", error.response.data);
      // Handle login error
    }
  };

  return (
    <div className="container login">
      <h2>Login to YourDemy</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
