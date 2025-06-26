import "../styles/order.css";

export default function Order() {
  return (
    <div className="order-wrapper">
      <h2 className="order-heading">Order Summary</h2>

      <div className="order-item">
        <div className="order-title">
          <span className="product-name">USB-C Cable</span>
          <span className="product-price">
            <del>$12.99</del> <strong>$11.99</strong>
          </span>
        </div>
        <div className="product-sub">
          <span>Electronics</span>
          <span className="discount-note">🔗 -100 points used</span>
        </div>
      </div>

      <hr />

      <div className="summary-row">
        <span>Subtotal:</span>
        <span>$12.99</span>
      </div>
      <div className="summary-row green">
        <span>Points Discount:</span>
        <span>-$1.00</span>
      </div>

      <hr />

      <div className="summary-total">
        <span>Total:</span>
        <span>$11.99</span>
      </div>

      <p className="save-msg">You saved $1.00 with 100 points!</p>

      <button className="pay-button">Complete Payment - $11.99</button>

      <div className="secure-box">
        <span className="secure-title">🔒 Secure Payment</span>
        <p>Your payment information is encrypted and secure.</p>
      </div>
    </div>
  );
}
