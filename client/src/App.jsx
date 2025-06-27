import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import Inform from './pages/inform';
import Donate from './pages/donate';
import DashBoard from './pages/dashboard';
<<<<<<< HEAD
import Shop from './pages/shop';
=======
import Payment from './pages/payment';
>>>>>>> 0b3833dd6cf7abfcbf2f189846d7954ae21bc065
function App() {
  return (
    <>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/inform" element={<Inform />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/dashboard" element={<DashBoard/>}/>
<<<<<<< HEAD
            <Route path="/shop" element={<Shop/>}/>
=======
            <Route path="/payment" element={<Payment/>}/>       
>>>>>>> 0b3833dd6cf7abfcbf2f189846d7954ae21bc065
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
