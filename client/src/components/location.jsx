import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../styles/location.css";

export default function Location({name}) {
  const [location, setLocation] = useState("");
  //geolocation
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
          setLocation(coords);
        },
        () => alert("Failed to get location")
      );
    } else {
      alert("Geolocation not supported by this browser.");
    }
  };

  return (
    <div className="location-group">
      <label className="location-label">{name} <span className="required">*</span></label>
      <div className="location-input-wrapper">
        <FaMapMarkerAlt className="location-icon" />
        <input
          type="text"
          placeholder="Enter address or click to use current location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="location-input"
        />
      </div>
      <button className="location-btn" onClick={handleLocationClick}>
        Use Current Location
      </button>
    </div>
  );
}
