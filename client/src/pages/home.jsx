import Boxes from '../components/boxes';
import Share from '../components/share';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Stats from "../components/landingstats";
import GreenDiv from '../components/greendiv';
export default function Home() {
  return (
    <div>
      <Navbar btn1="About" btn2="Login" btn3="Register"/>
      <Share
       h1="Share Food, Share Hope"
       p1="Join our mission to reduce food waste and fight hunger."
       p2="Connect with those in need through our simple and secure platform."
      />
      <Boxes/>
      <Stats/>
      <GreenDiv/>
      <Footer/>
    </div>
  );
}
