import Box from '../components/box';
import GreenDiv from '../components/greendiv';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import '../styles/box.css'; 
import '../App.css';
export default function About() {
  return(
    <div>
      <Navbar btn1="Home" btn2="Login" btn3="Register"/>
      <h1>About VIVANDA</h1>
      <div className="boxes">
      <Box
      name="fa-solid fa-house"
      title="Quick Ordering"
      desc="Get groceries, medicines, and essentials delivered quickly through a simple, community-powered process."
      />
      <Box
      name="fa-solid fa-cart-shopping"
      title="Quick Ordering"
      desc="Get groceries, medicines, and essentials delivered quickly through a simple, community-powered process."
      />
      </div>
      <h3>Our Values</h3>
      <div className="boxes">
        <Box
      name="fa-solid fa-cart-shopping"
      title="Quick Ordering"
      desc="Get groceries, medicines, and essentials delivered quickly through a simple, community-powered process."
      />
      <Box
      name="fa-solid fa-cart-shopping"
      title="Quick Ordering"
      desc="Get groceries, medicines, and essentials delivered quickly through a simple, community-powered process."
      />
      <Box
      name="fa-solid fa-cart-shopping"
      title="Quick Ordering"
      desc="Get groceries, medicines, and essentials delivered quickly through a simple, community-powered process."
      />
      </div>
      <div id="story">
        <h3>Story of VIVANDA</h3>
        <p>VIVANDA was born from a simple observation: while millions of people struggle with food insecurity, 
          tons of perfectly good food are wasted every day. We saw restaurants closing with surplus meals, families 
          with extra groceries, and community members who didn't know where their next meal would come from.</p><br/>
          <p>Founded 
          in 2024, our platform started as a small community initiative and has grown into a movement that connects 
          thousands of generous donors with families, shelters, and organizations in need. We've facilitated over 
          10,000 meal donations and continue to expand our impact every day.</p><br/>
          <p>What sets us apart is our focus on 
          building genuine community connections. We're not just a food-sharing app – we're a platform that brings neighbors 
          together, creates lasting relationships, and transforms how communities think about food waste and food security.</p>
      </div>
      <GreenDiv/>
      <Footer/>
    </div>
  );
}
