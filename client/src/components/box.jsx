import "../styles/box.css";
export default function Box({name,title,desc}){
    return (
        <div className="box-container">
            <i className={name}></i>
            <h3><strong>{title}</strong></h3>
            <p>{desc}</p>
        </div>
    );
}