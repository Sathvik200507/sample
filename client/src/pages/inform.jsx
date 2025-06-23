import Navbar from "../components/Navbar";
import Share2 from "../components/homeshare";
import "../styles/homeshare.css";
import Photo from "../components/photo";
import Location from "../components/location";
import DescBox from "../components/Desc";
import "../styles/inform.css";

export default function Inform() {
    return (
        <>
            <Navbar/>
            <Share2
                h="Share Information About Food Need"
                p="Inform by sharing photos and locations of the needy"
            />
            <div className="info-box">
                <Photo desc="Upload Photo" color="rgb(37, 99, 235)"/><br /><br />
                <Location name="Location"/><br />
                <DescBox
                    name="Description (Optional)"
                    placeholder="Enter details here..."
                />
                <button type="button" className="btn btn-primary w-100" style={{backgroundColor:"rgb(37, 99, 235)",border:0}}>Submit Information</button>
            </div>
        </>
    );
}

