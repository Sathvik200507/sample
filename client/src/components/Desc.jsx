import "../styles/desc.css";

export default function DescBox({ onChange, value, name, placeholder }) {
  return (
    <div className="desc-box">
      <label className="desc-label">{name}</label>
      <textarea
        name={name} // required for form state update
        className="desc-textarea"
        placeholder={placeholder}
        value={value} // controlled input
        onChange={onChange} // ensures it updates form state
        rows={5}
      />
    </div>
  );
}
