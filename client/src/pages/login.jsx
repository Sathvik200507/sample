import '../styles/login.css';
// import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import MyButton from '../components/button';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  let [login,setLogin]=useState({
    userName:"",
    password:""
  });

  const updateDetails=(event)=>{
    setLogin((curr)=>{
      return {...curr,[event.target.name]:event.target.value};
    });
  };

 const handleSubmit = async (event) => {
  event.preventDefault();
  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // ✅ sends cookies to backend
    body: JSON.stringify(login)
  });

  const result = await response.json();
  if (result.success) {
    navigate("/dashboard");
  } else {
    alert("Invalid Username or Password");
    setLogin({
      userName: "",
      password: ""
    });
  }
};


  return (
    <>
    <Navbar btn1="About" btn3="Register"/>
    <div className="login-container">
      <h2>Welcome Back</h2>
      <p>Sign in to your account to continue sharing and requesting food</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter your username" name="userName" value={login.userName} onChange={updateDetails} required />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" name="password" value={login.password} onChange={updateDetails} required />

        <MyButton btnName={"Sign In"} className="sign-in-btn" />
      </form>
      <p className="signup-link">
        Don't have an account? <a href="#signup">Sign up here</a>
      </p>
    </div>
    <div id="footer"><Footer /></div>
    </>
  );
};

export default Login;
