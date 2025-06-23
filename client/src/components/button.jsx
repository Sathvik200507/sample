import "../App.css";
export default function MyButton({btnName, className}){
    return <button type="submit" className={className}>{btnName}</button>;
}