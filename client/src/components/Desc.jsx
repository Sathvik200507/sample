import "../styles/desc.css";
export default function DescBox({name,placeholder}){
    return (
        <div className="desc-box">
            <label className="desc-label">{name}</label>
            <textarea
                className="desc-textarea"
                placeholder={placeholder}
                rows={5}
            />
        </div>
    );
}