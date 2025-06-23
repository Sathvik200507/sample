import Navbar from '../components/Navbar';
import CardList from '../components/CardList';
import Stats from "../components/landingstats";
import GreenDiv from '../components/greendiv';
import Footer from '../components/footer';
import '../App.css';

const App = () => {
  return (
    <div >
      <Navbar btn1="" btn2="" btn3="" />
      <br/><br/>
      <div className="body">
      <h1 style={{ textAlign: 'center', marginTop: '5px' }}>Together We Can End Food Waste</h1>
      <p style={{ textAlign: 'center' }}>Join our mission to reduce food waste and help those in need. Every action counts.</p>
      <CardList />
      </div>
      <Stats/>
      <GreenDiv/>
      <Footer/>
    </div>
  );
};

export default App;
