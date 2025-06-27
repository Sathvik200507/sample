import Boxes from '../components/boxes';
import Share from '../components/share';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Stats from "../components/landingstats";
import GreenDiv from '../components/greendiv';
import { Link } from 'react-router-dom';
import '../styles/home.css'
export default function Home() {
  return (
    <div>
      <Navbar btn1="About" btn2="Login" btn3="Register"/>
      <div id="homediv">
      <div id="landingBox">
      <Share title="Share Food, Share Hope" desc="Join our mission to reduce food waste and fight hunger.Connect with those in need through our simple and secure platform."/>
      <Link to="/register" className="link-no-style">
        <button id="button">Donate Now</button>
      </Link>
      </div>
     </div>
      <Boxes/>
      <Stats/>
      <GreenDiv/>
      <Footer/>
    </div>
  );
}
