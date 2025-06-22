import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import DashBoard from './pages/dashboard';

function App() {
  return (
    <>
          <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashBoard/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
