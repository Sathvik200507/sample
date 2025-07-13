import '../styles/CartSummary.css';
import { Link } from 'react-router-dom';

export default function CartSummary(props) {
  const { cartItems = [] } = props;

  // Calculate total price (optional enhancement)
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>

      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <span className="cart-item-title">{item.title}</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="cart-item-price">&#8377;{item.price}</span>
            <button className="cart-item-remove">✕</button>
          </div>
        </div>
      ))}

      <div className="cart-total">
        <span>Total:</span>
        <span>&#8377;{total}</span>
      </div>

      <div className="cart-points">Total Points Used: {/* Optional: Calculate here */}</div>

      <Link to="/payment" className="link-no-style">
        <button className="checkout-btn">Proceed to Checkout</button>
      </Link>
    </div>
  );
}
