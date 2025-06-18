import React from 'react';
import '../styles/login.css'
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <>
    <Navbar btn1=""/>
    <div className="login-container">
      <h2>Welcome Back</h2>
      <p>Sign in to your account to continue sharing and requesting food</p>
      <form className="login-form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit" className="sign-in-btn">Sign In</button>
      </form>
      <p className="signup-link">
        Don't have an account? <a href="#signup">Sign up here</a>
      </p>
    </div>
    </>
  );
};

export default Login;
