import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import Inform from './pages/inform';
import Donate from './pages/donate';

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
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
