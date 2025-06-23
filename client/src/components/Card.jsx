import '../styles/Card.css';

const Card = ({ icon, title, description, color, buttonText }) => {
  return (
    <div className="card">
    <div className="icon-circle" style={{ backgroundColor: color }}>
      <i className={icon}></i>
    </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button style={{ backgroundColor: color }}>{buttonText}</button>
    </div>
  );
};

export default Card;
