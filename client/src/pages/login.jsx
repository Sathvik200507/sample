import '../styles/login.css'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import MyButton from '../components/button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <Navbar btn1="About" btn3="Register"/>
    <div className="login-container">
      <h2>Welcome Back</h2>
      <p>Sign in to your account to continue sharing and requesting food</p>
      <form className="login-form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />

        <Link to="/dashboard"><MyButton btnName={"Sign In"} className="sign-in-btn" /></Link>
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
