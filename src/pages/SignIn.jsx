import { useState } from "react";
import "./Signin.css";
import { useNavigate, Link } from "react-router-dom";

const SignIn = ({
  setUserName,
  userName
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSignin = () => {
    if (userName.length < 7) {
      alert("Username must be at least 7 characters long!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Enter a valid email address!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    alert("Sign-in successful!");
    navigate('/login');
  };

  return (
    <div className="signin-container">
      <h1 className="signin-title">Sign In</h1>
       <h2 className='signin-login'>Welcome To Jk Instamat</h2>
      <input
        className="signin-input"
        placeholder="Enter the UserName"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        className="signin-input"
        placeholder="Enter the Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="signin-input"
        placeholder="Enter the Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="signin-btn" type="submit" onClick={handleSignin}>
        Sign In
      </button>

      <h3 className="signin-login-text">
        Already Have Acc Please Login  
        <Link className="signin-login-link" to="/login">
         Here.!
        </Link>
      </h3>
    </div>
  );
};

export default SignIn;
