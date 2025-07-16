// import '../styles/productBox.css';
// //import { useNavigate } from "react-router-dom";
// export default function ProductBox(props) {
//   //const navigate=useNavigate();
//   const addCart=async({_id,option})=>{
//     const res=await fetch("http://localhost:5000/cart", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({pid:_id,option:option})
//     });
//     const data=await res.json();
//     /*if(data.success)
//       navigate("/CartSummary",{state:{title:data.title,price:data.price}});*/
//   };

//   const {
//     _id,
//     category,
//     image,
//     title,
//     desc,
//     rating,
//     reviews,
//     price,
//     offerPrice,
//     points,
//     finalPrice
//   } = props;

//   return (
//     <div className="product-card">
//       <div className="product-img-container">
//         <img src={image} alt="Product" className="product-img" />
//         <div className="badge">{category}</div>
//       </div>

//       <h3 className="product-title">{title}</h3>
//       <p className="product-desc">{desc}</p>

//       <div className="product-rating">
//         <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
//         <span className="rating-value">{rating}</span>
//         <span className="rating-count">({reviews} reviews)</span>
//       </div>

//       <div className="product-price">
//         <span className="offer-price">&#8377;{offerPrice.toFixed(2)}</span>
//         <span className="actual-price">&#8377;{price.toFixed(2)}</span>
//       </div>

//       <div className="points-box">
//         <div className="points-row">
//           <i className="fa-solid fa-tag" style={{ color: '#1291f3' }}></i>
//           <span className="points-text">Use Points</span>
//           <span className="points-value">{points} pts</span>
//         </div>
//         <div className="final-price-row">
//           <span>Final Price: <span className="final-price">&#8377;{finalPrice.toFixed(2)}</span></span>
//         </div>
//       </div>

//       <button className="add-to-cart-btn" onClick={() => addCart({ _id, option: "nrml" })}>Add to Cart - &#8377;{offerPrice.toFixed(2)}</button>
//       <button className="use-points-btn" onClick={() => addCart({ _id, option: "pts" })}>Use Points - &#8377;{finalPrice.toFixed(2)}</button>
//     </div>
//   );
// }


import '../styles/productBox.css'
import { useCart } from '../components/context/cardContext'

export default function productBox(props) {
   const { addToCart } = useCart();
   const {
      id, category, image, title, desc,
      offerPrice, price, points, finalPrice,
      rating, reviews
    } = props;

     const handleAdd = (option) => {
      addToCart({
        id,
        name: title,
        price: (option==="original")?offerPrice:finalPrice
      });
    };

  return (
    <div className="product-card">
      <div className="product-img-container">
        <img src={image} alt="Product" className="product-img" />
        <div className="badge">{category}</div>
      </div>

      <h3 className="product-title">{title}</h3>
      <p className="product-desc">{desc}</p>

      <div className="product-rating">
        <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
        <span className="rating-value">{rating}</span>
        <span className="rating-count">({reviews} reviews)</span>
      </div>

      <div className="product-price">
        <span className="offer-price">&#8377;{offerPrice.toFixed(2)}</span>
        <span className="actual-price">&#8377;{price.toFixed(2)}</span>
      </div>

      <div className="points-box">
        <div className="points-row">
          <i className="fa-solid fa-tag" style={{ color: '#1291f3' }}></i>
          <span className="points-text">Use Points</span>
          <span className="points-value">{points} pts</span>
        </div>
        <div className="final-price-row">
          <span>Final Price: <span className="final-price">&#8377;{finalPrice.toFixed(2)}</span></span>
        </div>
      </div>

      <button className="add-to-cart-btn" onClick={() => handleAdd("original")}>
        Add to Cart - ₹{offerPrice.toFixed(2)}
      </button>

      <button className="use-points-btn" onClick={() => handleAdd("points")}>
        Use Points - ₹{finalPrice.toFixed(2)}
      </button>

    </div>
  );
}