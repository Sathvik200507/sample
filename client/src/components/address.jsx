import '../styles/address.css';
export default function Address(){
    return(
        <div className="Address-Wrapper">
            <h2>Billing Address</h2>
            <div className="bill1">
                <span>Address</span>
                <input type="text" placeholder="Enter Full Address"/><br/>
            </div>
            <div className="bill2">
                <div>
                    <span>City</span>
                    <input type="text" placeholder="Hyderabad" />
                </div>
                <div>
                    <span>PIN Code</span>
                    <input type="text" placeholder="500072" />
                </div>
            </div>
        </div>
    );
}