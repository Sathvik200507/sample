// src/components/location.jsx
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import "../styles/location.css";

export default function Location({ value, onChange }) {
  // helper: bubble any string up as { target: { name, value } }
  const update = (val) =>
    onChange({ target: { name: "location", value: val } });

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      return alert("Geolocation not supported by this browser.");
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = `${pos.coords.latitude}, ${pos.coords.longitude}`;
        update(coords);                          // ⬅️ write into parent state
      },
      () => alert("Failed to get location")
    );
  };

  return (
    <div className="location-group">
      <label className="location-label">
        Location <span className="required">*</span>
      </label>

      <div className="location-input-wrapper">
        <FaMapMarkerAlt className="location-icon" />
        <input
          name="location"                         // <-- name is critical
          type="text"
          className="location-input"
          placeholder="Enter address or click button"
          value={value}                           // ← controlled by parent
          onChange={(e) => update(e.target.value)}
        />
      </div>

      <button type="button" className="location-btn" onClick={handleLocationClick}>
        Use Current Location
      </button>
    </div>
  );
}
