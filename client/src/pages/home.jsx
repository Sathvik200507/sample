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
      <Share/>
      <Boxes/>
      <Stats/>
      <GreenDiv/>
      <Footer/>
    </div>
  );
}
