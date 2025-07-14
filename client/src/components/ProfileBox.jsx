import { useRef } from "react";
import "../styles/profile.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function ProfileBox({ user }) {
  const fileInputRef = useRef();

  const handleEditClick = () => {
    fileInputRef.current.click(); // Trigger hidden file input
  };

  const handlePhotoChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("photo", file);

    try {
      const res = await fetch("http://localhost:5000/upload-profile-photo", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        alert("Profile photo updated!");
        window.location.reload(); // Refresh to reflect the new photo
      } else {
        alert(result.message || "Upload failed");
      }
    } catch (err) {
      console.error("Upload failed", err);
      alert("Upload failed");
    }
  };

  return (
    <div className="profile-box">
      <div className="profile-image-container">
        <img
          src={`http://localhost:5000${user.photo}`}
          alt="Profile"
          className="profile-image"
        />
        <button className="edit-button" onClick={handleEditClick}>
          <span><i className="fa-solid fa-pen"></i></span>
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handlePhotoChange}
        />
      </div>
      <h2>{user.fullName}</h2>
      <p className="role">Food Donation Hero</p>

      <div className="info-item"><FaEnvelope className="icon" /><span>{user.email}</span></div>
      <div className="info-item"><FaPhone className="icon" /><span>{user.contactNumber}</span></div>
      <div className="info-item"><FaMapMarkerAlt className="icon" /><span>{user.address}</span></div>
      <div className="info-item"><FaCalendarAlt className="icon" /><span>Member since {new Date(user.memberSince).toLocaleString('default', { month: 'long', year: 'numeric' })}</span></div>
    </div>
  );
}
