import "../styles/share.css";
export default function Share({h1,p1,p2}){
    return(
        <div className="share">
            {h1 && <h1>{h1}</h1>}
            {p1 && <p id="p1">{p1}</p>}
            {p2 && <p id="p2">{p2}</p>}
            <button type="button" className="btn btn-success" id="button">Donate Now</button>
        </div>
    );
}