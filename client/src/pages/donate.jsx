import Navbar from "../components/Navbar";
import Share2 from "../components/homeshare";
import "../styles/homeshare.css";
import Photo from "../components/photo";
import Location from "../components/location";
import DescBox from "../components/Desc";
import "../styles/inform.css";

export default function Donate() {
  return (
    <>
      <Navbar />
      <Share2
        h="Donate Food to Those in Need"
        p="Share your excess food with people who need it most"
      />
      <div className="info-box">
        <div className="form-group">
          <label className="form-label">Quantity <span className="required">*</span></label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., 5 kg, 10 portions, 3 bags"
          />
        </div><br /><br />
        <div className="form-group">
          <label className="form-label">Freshness <span className="required">*</span></label>
          <select className="form-control">
            <option>Select freshness level</option>
            <option>Very Fresh (Same day)</option>
            <option>Fresh (1–2 days)</option>
            <option>Good (3–5 days)</option>
            <option>Fair (Best before date approaching)</option>
          </select>
        </div><br />

        <Photo desc="Photo of Food" /><br /><br />
        <Location name="Location" /><br />
        <DescBox
          name="Additional Information (Optional)"
          placeholder="Any additional details about food, pickup instructions etc..."
        />
        <button
          type="button"
          className="btn btn-primary w-100"
          style={{ backgroundColor: "rgb(220 38 38)", border: 0 }}
        >
          Submit Donation
        </button>
      </div>
    </>
  );
}
