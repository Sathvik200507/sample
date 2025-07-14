import "../styles/profile.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function ProfileBox({ user }) {
  return (
    <div className="profile-box">
      <div className="profile-image-container">
        <img
          src={`http://localhost:5000${user.photo}`} 
          alt="Profile" 
          className="profile-image"
        />
        <button className="edit-button">
          <span><i className="fa-solid fa-pen"></i></span>
        </button>
      </div>
      <h2>{user.fullName}</h2>
      <p className="role">Food Donation Hero</p>

      <div className="info-item">
        <FaEnvelope className="icon" />
        <span>{user.email}</span>
      </div>
      <div className="info-item">
        <FaPhone className="icon" />
        <span>{user.contactNumber}</span>
      </div>
      <div className="info-item">
        <FaMapMarkerAlt className="icon" />
        <span>{user.address}</span>
      </div>
      <div className="info-item">
        <FaCalendarAlt className="icon" />
        <span>Member since {new Date(user.memberSince).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
      </div>
    </div>
  );
}
