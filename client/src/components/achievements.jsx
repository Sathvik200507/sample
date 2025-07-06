import "../styles/achievements.css";
// import "../styles/profile.css";

export default function Achievements({ badges }) {
  return (
    <div className="achievements-card">
      <h3>Achievements</h3>
      <div className="badge-list">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`badge-item ${badge.earned ? "earned" : "locked"}`}
          >
            <div className="badge-icon">
              <span role="img" aria-label="medal">🎖️</span>
            </div>
            <div>
              <h6>{badge.title}</h6>
              <p>{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
