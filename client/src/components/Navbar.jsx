import { useState } from 'react';
import { Link } from 'react-router-dom';
import MyButton from './button.jsx';
import "../App.css";

export default function Navbar({btn1,btn2,btn3}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <nav className="nav-content">
                <div className="logo">
                    <i className="fa-regular fa-heart"></i>
                    <h4><strong>VIVANDA</strong></h4>
                </div>
                <div className="spacer" />
                <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </div>

                <div className={`nav-buttons ${isMenuOpen ? 'open' : ''}`}>
                    <Link to={`/${btn1.toLowerCase()}`}><MyButton btnName={btn1} className="btn btn-outline-secondary" /></Link>
                    {btn2 && (
                        <Link to="/login">
                        <MyButton btnName={btn2} className="btn btn-outline-secondary" />
                        </Link>
                    )}
                    {btn3 && (
                        <Link to="/register">
                        <MyButton btnName={btn3} className="btn btn-success" />
                        </Link>
                    )}
                    {/* <Link to="/register"><MyButton btnName={btn3} className="btn btn-success" /></Link> */}
                </div>
            </nav>
        </div>
    );
}
