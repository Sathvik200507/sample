import "../styles/address.css";
export default function CardDetails(){
    return(
        <div className="Address-Wrapper">
            <h2>Payment Information</h2>
            <div className="bill1">
                <span>Card Number</span>
                <input type="tel" inputMode="numeric" maxLength="19" placeholder="1234 5679 9012 3456"/><br/>
            </div>
            <div className="bill2">
                <div>
                    <span>Expiry Date</span>
                    <input type="text" placeholder="MM/YY" pattern="\d{2}/\d{2}" inputMode="numeric"/>
                </div>
                <div>
                    <span>CVV</span>
                    <input type="password" placeholder="123" inputMode="numeric" maxLength="3"/>
                </div>
            </div>
            <div className="bill1">
                <span>Cardholder Name</span>
                <input type="text" placeholder="Surya"/><br/>
            </div>
        </div>
    );
}