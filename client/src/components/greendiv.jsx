import "../styles/greendiv.css";
import { Link } from 'react-router-dom';
export default function greenDiv(){
    return(
        <div className="ready">
            <h3>Ready to Make a Difference?</h3>
            <p>Join thousands of people who are already fighting food waste and hunger in their communities.</p>
            <Link to="/register"><button>Get Started Today</button></Link>
        </div>
    );
}