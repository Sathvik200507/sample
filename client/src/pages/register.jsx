import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import '../styles/register.css';

function Register() {
  return (
    <>
      <Navbar btn1="About" btn2="Login" />
      <div className="register-container">
        <h2>Join VIVANDA</h2>
        <p>Create your account to start making a difference in your community</p>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" required />

          <label>Email</label>
          <input type="email" placeholder="Email" required />

          <label>Password</label>
          <input type="password" placeholder="Password" required />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Sign in here</a></p>
      </div>
      <div id="#footer"><Footer /></div>
    </>
  );
}

export default Register;
