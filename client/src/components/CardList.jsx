import Card from './Card.jsx';
import '../styles/CardList.css';

const cardData = [
  {
    icon: "fa-solid fa-circle-info", // ℹ️
    title: "Inform",
    description: "Get info on reducing food waste effectively.",
    color: "#4F8EF7",
    buttonText: "Learn More",
    link:"/inform"
  },
  {
    icon: "fa-solid fa-heart", // ❤️
    title: "Donate",
    description: "Help by donating excess food to the needy.",
    color: "#F75D59",
    buttonText: "Start Donating",
    link:"/donate"
  },
  {
    icon: "fa-solid fa-bag-shopping", // 🛍️
    title: "Shop",
    description: "Buy discounted food items and save waste.",
    color: "#4CAF50",
    buttonText: "Browse Shop",
    link:"/shop"
  }
];


const CardList = () => {
  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          color={card.color}
          buttonText={card.buttonText}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardList;
