import React, { useState } from "react";

import "./Login.css";
import axios from "axios";
import Admin from "./Admin.component";
import { Link } from "react-router-dom";
import useToken from "./App/useToken";

const api = "/api";

async function loginUser(credentials) {
  const result = await axios.post(`${api}/users/login`, credentials);
  return result.data;
}

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState("");
  const { token, setToken } = useToken();

  if (token) {
    return <Admin token={token} user={user} set={setToken} />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser({
      email,
      password,
    });

    setToken(data.token);
    setUser(data);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email:</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
          <button type="submit">
            <Link to="/">Back to Home</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
