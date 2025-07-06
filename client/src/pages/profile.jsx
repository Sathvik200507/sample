import { useEffect, useState } from 'react';
import ProfileBox from '../components/ProfileBox';
import NavBar from '../components/Navbar';
import PieChartBox from '../components/PieChartBox';
import BargraphBox from '../components/BargraphBox';
import QuickStats from '../components/QuickStats';
import Achievements from '../components/achievements';
import '../styles/profile.css';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/profile")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching profile data:", err));
  }, []);

  return (
    <>
      <NavBar btn1="" btn2="" btn3="" />
      <br />
      <div className="dashboard-wrapper">
        <div className="top-row">
      {user && <ProfileBox user={user} />}
      {user && <PieChartBox data={user.donationPercentages} />}
      <BargraphBox />
      </div>
      <div className="bottom-row">
      {user && <QuickStats 
          totalDonations={user.totalDonations}
          pointsEarned={user.points}
          impactLevel={user.impactLevel}
      />}
      {user && <Achievements badges={user.badges}/>}
      </div>
      </div>
    </>
  );
}
