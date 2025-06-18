import "../App.css";
export default function MyButton({btnName, className}){
    return <button type="button" className={className}>{btnName}</button>;
}