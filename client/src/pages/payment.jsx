import Navbar from "../components/Navbar";
import Method from "../components/method";
import Address from "../components/address";
import CardDetails from "../components/card-details";
import UPI from "../components/upi";
import Order from "../components/order";
import "../styles/payment.css";

export default function Payment() {
    return (
        <>
        <Navbar btn1="" btn2="" btn3="" /><br/><br/>
        <div className="pageContainer">
            <div className="paymentLayout">
                <div className="leftColumn">
                    <Method />
                    <CardDetails />
                    <UPI />
                    <Address />
                </div>
                <div className="rightColumn">
                    <Order />
                </div>
            </div>
        </div>
        </>
    );
}
