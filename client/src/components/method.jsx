import "../styles/payMethod.css";

export default function Method() {
  return (
    <div className="payment-wrapper">
      <h2 className="payment-heading">Choose Payment Method</h2>

      <label className="payment-option">
        <input type="radio" name="payment" />
        <div className="icon blue">
          <i className="fa-solid fa-wallet"></i>
        </div>
        <span>Google Pay</span>
      </label>

      <label className="payment-option">
        <input type="radio" name="payment" />
        <div className="icon purple">
          <i className="fa-solid fa-mobile-screen-button"></i>
        </div>
        <span>PhonePe</span>
      </label>

      <label className="payment-option">
        <input type="radio" name="payment" />
        <div className="icon orange">
          <i className="fa-solid fa-mobile"></i>
        </div>
        <span>UPI</span>
      </label>

      <label className="payment-option">
        <input type="radio" name="payment" defaultChecked />
        <div className="icon black">
          <i className="fa-solid fa-credit-card"></i>
        </div>
        <span>Credit/Debit Card</span>
      </label>
    </div>
  );
}
