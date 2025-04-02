import { useState } from "react";
import "./Login.css"; 

const Login = ({ userName, }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {

    if (!validateEmail(loginEmail)) { 
      alert("Enter a valid email address!");
      return;
    }

    if (loginPassword.length < 6) { 
      alert("Password must be at least 6 characters long!");
      return;
    }

    alert("Login successful!");
  };

  return (
    <div className="signin-container"> 
      <h1 className="signin-title">Login</h1>
      <h2 className="signin-login-text">Welcome, {userName || "Guest"}!</h2>

      <input
        className="signin-input"
        placeholder="Enter the Email"
        type="email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      
      <input
        className="signin-input"
        placeholder="Enter the Password"
        type="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />

      <button className="signin-btn" onClick={handleLogin}>Login</button>

    </div>
  );
};

export default Login;
