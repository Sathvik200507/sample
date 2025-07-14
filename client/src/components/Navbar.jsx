import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MyButton from './button.jsx';
import "../App.css";

export default function Navbar({btn1,btn2,btn3}) {
  const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      const handleLogout = () => {
        console.log("/logout hit");
    fetch("http://localhost:5000/logout", {
      method: "GET",
      credentials: "include", // ✅ required for session cookie
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate("/home"); // ✅ client-side redirect
        }
      })
      .catch((err) => console.error("Logout failed", err));
  };



    return (
        <div className="navbar">
            <nav className="nav-content">
                <div className="logo">
                    <i className="fa-solid fa-plate-wheat"></i>
                    <h4><strong>RePlato</strong></h4>
                </div>
                <div className="spacer" />
                {(btn1 || btn2|| btn3) && <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </div>}

                <div className={`nav-buttons ${isMenuOpen ? 'open' : ''}`}>
                  {btn1 && (
                        <Link to={`/${btn1.toLowerCase()}`}>
                        <MyButton btnName={btn1} className="btn btn-outline-secondary" />
                        </Link>
                    )}
                    {btn2 && (
                        <Link to={`/${btn2.toLowerCase()}`}>
                        <MyButton btnName={btn2} className="btn btn-outline-secondary" />
                        </Link>
                    )}
                    {btn3 && (
                    btn3.toLowerCase() === "logout" ? (
                        <MyButton
                        btnName={btn3}
                        className="btn btn-success"
                        onClick={handleLogout}
                        />
                    ) : (
                        <Link to={`/${btn3.toLowerCase()}`}>
                        <MyButton btnName={btn3} className="btn btn-success" />
                        </Link>
                    )
                    )}
                </div>
            </nav>
        </div>
    );
}
