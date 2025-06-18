import "../styles/landingstats.css";
export default function Stats() {
  return (
    <div className="container">
      <div className="stats">
        <div>
          <h4 className="green">10,000+</h4>
          <p>Meals Donated</p>
        </div>
        <div>
          <h4 className="blue">2,500+</h4>
          <p>Active Users</p>
        </div>
        <div>
          <h4 className="orange">500+</h4>
          <p>Partner Organizations</p>
        </div>
      </div>
    </div>
  );
}
