import { useState } from "react";
import API from "../api/api.js";

export default function Register({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", { username, email, password });
      alert("User registered! Please Login.");
    } catch (error) {
        console.log(error.response?.data);
      alert("Registration failed!");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form action="">
        <input
          placeholder="Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
      </form>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
