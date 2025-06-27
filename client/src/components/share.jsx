import "../styles/share.css";
export default function Share({title,desc}){
    return(
        <div className="share">
            <br/>
            <h1>{title}</h1>
            <p id="p1">{desc}</p>
        </div>
    );
}