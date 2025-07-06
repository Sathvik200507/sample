import "../styles/recentDonationsBox.css";
import "../styles/profile.css";
export default function RecentDonationsBox({ donations }) {
  return (
    <div className="donations-box">
      <h3>Recent Donations</h3>
      {donations.length === 0 ? (
        <p className="no-data">No recent donations yet.</p>
      ) : (
        donations.map((donation, index) => (
          <div key={index} className="donation-item">
            <div>
              <strong>{donation.item}</strong>
              <div className="description">
                {donation.description} • {donation.time}
              </div>
            </div>
            <div className="points">+{donation.ptsEarned} pts</div>
          </div>
        ))
      )}
    </div>
  );
}
