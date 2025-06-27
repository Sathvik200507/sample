import "../styles/share.css";
export default function Share({title,desc}){
    return(
        <div className="share">
            <br/><br/>
            <h1 align="center">{title}</h1>
            <p id="p1" align="center">{desc}</p>
        </div>
    );
}