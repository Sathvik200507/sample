import { useState } from "react";
import Navbar from "../components/Navbar";
import Share2 from "../components/homeshare";
import "../styles/homeshare.css";
import Photo from "../components/photo";
import Location from "../components/location";
import DescBox from "../components/Desc";
import "../styles/inform.css";

export default function Donate() {
  const [form, setForm] = useState({
    name: "Anonymous",
    phone: "0000000000",
    email: "helo@gmail.com",
    quantity: "",
    freshness: "",
    type:"Veg",
    photo: "",
    location: "",
    additionalInformation: "",
  });

  // one generic change handler
  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.quantity || !form.freshness) {
      alert("Quantity and Freshness are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          info: {
            ...form,           // send everything that’s in state
          },
        }),
      });

      const result = await res.json();   // use the same variable!

      if (result.success) {
        alert(result.msg);
        // Optionally clear the form:
        // setForm({ ...initialState });
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to save donation");
    }
  };

  return (
    <>
      <Navbar />
      <Share2
        h="Donate Food to Those in Need"
        p="Share your excess food with people who need it most"
      />

      <div className="info-box">
        <form onSubmit={handleSubmit}>
          {/* QUANTITY ---------------------------------------------------- */}
          <div className="form-group">
            <label className="form-label">
              Quantity <span className="required">*</span>
            </label>
            <input
              name="quantity"                 /* ← add name */
              type="text"
              className="form-control"
              placeholder="e.g., 5 kg, 10 portions, 3 bags"
              value={form.quantity}
              onChange={handleChange}         /* ← generic handler */
            />
          </div><br /><br />

          {/* FRESHNESS --------------------------------------------------- */}
          <div className="form-group">
            <label className="form-label">
              Freshness <span className="required">*</span>
            </label>
            <select
              name="freshness"                /* ← add name */
              className="form-control"
              value={form.freshness}
              onChange={handleChange}
            >
              <option value="">Select freshness level</option>
              <option value="Very Fresh">Very Fresh (Same day)</option>
              <option value="Fresh">Fresh (1–2 days)</option>
              <option value="Good">Good (3–5 days)</option>
              <option value="Fair">Fair (Best-before approaching)</option>
            </select>
          </div><br />

          {/* CUSTOM COMPONENTS ------------------------------------------ */}
          <Photo
            name="photo"
            value={form.photo}
            onChange={handleChange}
            desc="Photo of Food"
          /><br /><br />

          <Location
            name="location"
            value={form.location}
            onChange={handleChange}
          /><br />

          <DescBox
            name="additionalInformation"
            value={form.additionalInformation}
            placeholder="Any additional details about food, pickup instructions etc..."
            onChange={handleChange}
          />

          {/* SUBMIT BUTTON ---------------------------------------------- */}
          <button
            type="submit"                     /* ← must be submit */
            className="btn btn-primary w-100"
            style={{ backgroundColor: "rgb(220 38 38)", border: 0 }}
          >
            Submit Donation
          </button>
        </form>
      </div>
    </>
  );
}
