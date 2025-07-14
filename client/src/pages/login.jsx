import '../styles/login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import MyButton from '../components/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ userName: "", password: "" });

  const updateDetails = (e) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!login.type) {
    alert("Please select your login role.");
    return;
  }

  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(login)
  });

  const result = await response.json();
  if (result.success) {
    // Redirect based on selected role
    if (login.type === "contributor") {
      navigate("/dashboard");
    } else if (login.type === "community member") {
      navigate("/volunteer");
    }
  } else {
    alert(result.message || "Invalid Username or Password");
    setLogin({ userName: "", password: "", type: "" });
  }
};



  return (
    <div id="page-container">
      <Navbar btn1="About" btn3="Register" />
      <main className="content-wrapper">
        <div className="login-container">
          <h2>Welcome Back</h2>
          <p>Sign in to your account to continue sharing and requesting food</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              name="userName"
              value={login.userName}
              onChange={updateDetails}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={login.password}
              onChange={updateDetails}
              required
            />
            
            <label>Login as</label>
            <select
              name="type"
              value={login.type}
              onChange={updateDetails}
              required
            >
              <option value="">Select Role</option>
              <option value="contributor">Contributor</option>
              <option value="community member">Community Member</option>
            </select>

            <MyButton btnName="Sign In" className="sign-in-btn" />
          </form>
          <p className="signup-link">
            Don’t have an account? <a href="#signup">Sign up here</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
