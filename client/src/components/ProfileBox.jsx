import "../styles/profile.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function ProfileBox() {
  return (
    <div className="profile-box">
      <div className="profile-image-container">
        <img src="../../public/assets/myphoto.jpg" alt="Profile" className="profile-image" />
        <button className="edit-button">
          <span>✏️</span>
        </button>
      </div>
      <h2>Sarah Johnson</h2>
      <p className="role">Food Donation Hero</p>

      <div className="info-item">
        <FaEnvelope className="icon" />
        <span>sarah.johnson@email.com</span>
      </div>
      <div className="info-item">
        <FaPhone className="icon" />
        <span>+1 (555) 123-4567</span>
      </div>
      <div className="info-item">
        <FaMapMarkerAlt className="icon" />
        <span>123 Community Street, Food City, FC 12345</span>
      </div>
      <div className="info-item">
        <FaCalendarAlt className="icon" />
        <span>Member since January 2023</span>
      </div>
    </div>
  );
}
