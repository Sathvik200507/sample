import Box from '../components/box';
import GreenDiv from '../components/greendiv';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import Share from '../components/share';
import '../styles/box.css'; 
import '../App.css';
export default function About() {
  return(
    <div>
      <Navbar btn1="Home" btn2="Login" btn3="Register"/>
      <Share title="About VIVANDA" desc="We're on a mission to create a world where no food goes to waste and no person goes hungry.
      VIVANDA connects communities, reduces waste, and spreads hope one meal at a time."/>
      <div className="boxes">
      <Box
      name="fa-solid fa-rocket"
      title="Our Mission"
      desc="To eliminate food waste and hunger by creating a seamless platform that connects food donors with those in need, fostering 
      community collaboration and sustainable practices."
      />
      <Box
      name="fa-solid fa-sun"
      title="Our Vision"
      desc="A world where every community has access to fresh, nutritious food, and where surplus food becomes a bridge to stronger, 
      more connected neighborhoods."
      />
      </div>
      <h3 align="center">Our Values</h3>
      <div className="boxes">
        <Box
      name="fa-solid fa-people-line"
      title="Community First"
      desc="We believe in the power of community to solve local challenges and create lasting change."
      />
      <Box
      name="fa-solid fa-award"
      title="Transparency"
      desc="We maintain open communication and clear processes to build trust within our community."
      />
      <Box
      name="fa-solid fa-handshake"
      title="Compassion"
      desc="Every interaction is guided by empathy, respect, and understanding of diverse needs."
      />
      </div>
      <div id="story">
        <div id="storyofvivanda">
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
      </div>
      <GreenDiv/>
      <Footer/>
    </div>
  );
}
