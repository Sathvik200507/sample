import "../styles/QuickStats.css";
// import "../styles/profile.css";

export default function QuickStats({ totalDonations, pointsEarned, impactLevel }) {
  return (
    <div className="quick-stats-card">
      <h3>Quick Stats</h3>

      <div className="stat-item">
        <span>Total Donations</span>
        <span className="stat-green">{totalDonations}</span>
      </div>

      <hr />

      <div className="stat-item">
        <span>Points Earned</span>
        <span className="stat-blue">
          <span role="img" aria-label="medal">🏅</span> {pointsEarned.toLocaleString()}
        </span>
      </div>

      <hr />

      <div className="stat-item">
        <span>Impact Level</span>
        <span className="impact-label">{impactLevel}</span>
      </div>
    </div>
  );
}
