import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  
  if (user) return <Dashboard setUser={setUser} />;
  return (
    <div className="container">
      {isRegistering ? (
        <>
        <Register/>
        <p onClick={() => setIsRegistering(false)}>
          Already have an account? Login
        </p>
        </>
      ) : (
        <>
        <Login setUser={setUser} />
        <p onClick={() => setIsRegistering(true)}>
          Don't have an account? register
        </p>
        </>
      )}
    </div>
  );
};   

export default App;
