import { useState } from "react";
import API from "../api/api.js";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });

      console.log(res.data.user);
      
      localStorage.setItem("token", res.data.token);

      setUser(res.data.user);
    } catch (error) {
      console.log("FULL ERROR:", error); 
      console.log("RESPONSE:", error.response); 
      console.log("DATA:", error.response?.data);
      alert("Login failed");
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form action="">
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <br />

        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
      </form>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
