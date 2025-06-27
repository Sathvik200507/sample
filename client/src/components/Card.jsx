import '../styles/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ icon, title, description, color, buttonText, link }) => {
  return (
    <div className="card">
    <div className="icon-circle" style={{ backgroundColor: color }}>
      <i className={icon}></i>
    </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="link-no-style">
      <button style={{ backgroundColor: color }}>{buttonText}</button>
      </Link>
    </div>
  );
};

export default Card;
