import { useState } from "react";
import Navbar from "../components/Navbar";
import Share2 from "../components/homeshare";
import "../styles/homeshare.css";
import Photo from "../components/photo";
import Location from "../components/location";
import DescBox from "../components/Desc";
import "../styles/inform.css";
export default function Inform() {
    const [inform, setInForm] = useState({
    name: "Anonymous",
    phone: "0000000000",
    email: "helo@gmail.com", // need to replace with oAuth i will do it when oAuth is added.
    photo: "",
    location: "",
    additionalInformation: "",
    });
    const handleChange = (e) =>
        setInForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inform.location || !inform.photo) {
      alert("Location and Photo are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/inform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          info: {
            ...inform,           // send everything that’s in state
          },
        }),
      });

      const result = await res.json();   // use the same variable!

      if (result.success) {
        alert(result.msg);
        // Optionally clear the form:
        // setForm({ ...initialState });
      } else {
        alert("inform failed");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to inform");
    }
  };

    return (
        <>
            <Navbar/>
            <Share2
                h="Share Information About Food Need"
                p="Inform by sharing photos and locations of the needy"
            />
            <div className="info-box">
                 <form onSubmit={handleSubmit}>
                    <Photo name="photo" value={inform.photo} desc="Upload Photo" color="rgb(37, 99, 235)" onChange={handleChange}/><br /><br />
                    <Location value={inform.location} onChange={handleChange}/><br />
                    <DescBox
                        onChange={handleChange}
                        value={inform.additionalInformation}
                        name="Description (Optional)"
                        placeholder="Enter details here..."
                    />
                    <button type="submit" className="btn btn-primary w-100" style={{backgroundColor:"rgb(37, 99, 235)",border:0}}>Submit Information</button>
                </form>
            </div>
        </>
    );
}

