import "../styles/share.css";
export default function Share(){
    return(
        <div className="share">
            <h1>Share Food, Share Hope</h1>
            <p id="p1">Join our mission to reduce food waste and fight hunger.</p>
            <p id="p2">Connect with those in need through our simple and secure platform.</p>
            <button type="button" className="btn btn-success" id="button">Donate Now</button>
        </div>
    );
}