import "../styles/address.css";
export default function UPI(){
    return(
        <div className="Address-Wrapper">
            <h2>Enter UPI ID</h2>
            <div className="bill1">
                <span>UPI ID</span>
                <input type="text" placeholder="yourname@ybl"/><br/>
            </div>
            <p style={{color:"#4b5563"}}>Enter your UPI ID to complete the payment</p>
        </div>
    );
}