import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import '../styles/register.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
  const navigate=useNavigate();
  let [register,setRegister]=useState({
    fullName:"",
    userName:"",
    email:"",
    contactNumber:"",
    gender:"",
    address:"",
    type:"",
    password:"",
    confirmPassword:""
  });

  const handleRegister=(event)=>{
    setRegister((curr)=>{
      return {...curr,[event.target.name]:event.target.value};
    });
  };

  const addDetails=async(event)=>{
    event.preventDefault();
    const response=await fetch("http://localhost:5000/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({info:register})
    });
    const result=await response.json();
    if(result.success){
      alert(result.msg);
      navigate("/login");
    }

    else if(result.msg==="pwd"){
      alert("Password and Confirm Password must match!");
      setRegister({
        password:"",
        confirmPassword:""
      });
    }

    else if(result.msg==="user"){
      alert("Username already exists!");
      setRegister({
        userName:""
      });
    }
  };

  return (
    <>
      <Navbar btn1="About" btn2="Login" />
      <div className="register-container">
        <h2>Join VIVANDA</h2>
        <p>Create your account to start making a difference in your community</p>

        <form onSubmit={addDetails}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="fullName" placeholder="Full Name" value={register.fullName} onChange={handleRegister} required />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input type="text" name="userName" placeholder="Username" value={register.userName} onChange={handleRegister} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={register.email} onChange={handleRegister} required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="contactNumber"
              placeholder="10-digit Indian Phone Number"
              pattern="[6-9]{1}[0-9]{9}"
              title="Enter a valid 10-digit Indian phone number starting with 6-9"
              value={register.contactNumber} onChange={handleRegister}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={register.gender} onChange={handleRegister} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" placeholder="Your full address" value={register.address} onChange={handleRegister} required />
          </div>

          <div className="form-group">
            <label>Type</label>
            <select name="type" value={register.type} onChange={handleRegister} required>
              <option value="">Select Type</option>
              <option value="restaurant">Restaurant</option>
              <option value="organization">Organization</option>
              <option value="household">Household</option>
            </select>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={register.password} onChange={handleRegister} required />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={register.confirmPassword} onChange={handleRegister} required />
          </div>

          <button type="submit">Register</button>
        </form>

        <p>Already have an account? <a href="/login">Sign in here</a></p>
      </div>
      <div id="footer"><Footer /></div>
    </>
  );
}

export default Register;
