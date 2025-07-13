// import '../styles/productBox.css'
// export default function productBox(props){
//     const {image,title,desc}=props;
//     return(
//         <div id="productbox">
//             <div id="productImage">
//             <img src={image} alt="Product Image"/>
//             </div>
//             <br/>
//             <div id="title">
//                 <h4>{title}</h4>
//             </div>
//             <div id="description">{desc}</div>
//             <div id="ratings">
//                 <div id="icon">
//                     <i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i>
//                 </div>
//                 <div id="number">
//                     <b>4.5</b> 
//                 </div>
//                 <div id="reviews">
//                     <p>(243 reviews)</p>
//                 </div>
//             </div>
//             <div id="price">
//                 <div id="discounted"><strong>&#8377;799</strong></div>
//                 <div id="original"><s>&#8377;1499</s></div>
//             </div>
//             <div id="prodDesc">
//             <div id="usePoints">
//                 <span><i className="fa-solid fa-tag" style={{color:'#1291f3'}}></i><small id="text">Use Points</small>< small id="points">500pts</small></span><br/>
//                 <span>Final Price:</span><strong id="finalPrice"> &#8377;699</strong>
//             </div>
//                 <div>
//                     <button id="noPointsbtn">Add to Cart-&#8377;799</button>
//                 </div>
//                 <div>
//                     <button id="pointsBtn">Use Points-&#8377;699</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

import '../styles/productBox.css';
//import { useNavigate } from "react-router-dom";
export default function ProductBox(props) {
  //const navigate=useNavigate();
  const addCart=async({_id,option})=>{
    const res=await fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({pid:_id,option:option})
    });
    const data=await res.json();
    /*if(data.success)
      navigate("/CartSummary",{state:{title:data.title,price:data.price}});*/
  };

  const {
    _id,
    category,
    image,
    title,
    desc,
    rating,
    reviews,
    price,
    offerPrice,
    points,
    finalPrice
  } = props;

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

      <button className="add-to-cart-btn" onClick={() => addCart({ _id, option: "nrml" })}>Add to Cart - &#8377;{offerPrice.toFixed(2)}</button>
      <button className="use-points-btn" onClick={() => addCart({ _id, option: "pts" })}>Use Points - &#8377;{finalPrice.toFixed(2)}</button>
    </div>
  );
}
