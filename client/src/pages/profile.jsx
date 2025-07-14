import { useEffect, useState } from "react";
import ProfileBox from '../components/ProfileBox';
import NavBar from '../components/Navbar';
import PieChartBox from '../components/PieChartBox';
import BargraphBox from '../components/BargraphBox';
import QuickStats from '../components/QuickStats';
import Achievements from '../components/achievements';
import RecentDonationsBox from "../components/RecentDonationsBox";
import '../styles/profile.css';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      method: "GET",
      credentials: "include",
    })
      .then(async (res) => {
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.message || "Unknown error");
        }
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => {
        console.error("Error fetching profile data:", err);
        setUser(null); // or maybe show an error message
      });
  }, []);

  if (!user) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h4>Please Login/Register to see your Profile</h4>
      <a href="/login">Login here</a>
      </div>;
  }

  return (
    <>
      <NavBar btn1="About" btn2="DashBoard" btn3="Logout" />
      <div className="dashboard-wrapper">
        <div className="top-row">
      {<ProfileBox user={user} />}
      <PieChartBox data={user?.donationPercentages || []} />
      <BargraphBox data={user?.monthlyActivity || []} />
      </div>
      <div className="bottom-row">
      {<QuickStats 
          totalDonations={user.totalDonations}
          pointsEarned={user.points}
          impactLevel={user.impactLevel}
      />}
      { <Achievements badges={user.badges}/>}
      </div>
      <div id="recent-donationations">
        <RecentDonationsBox donations={user.recentDonations}/>
      </div>
      </div>
    </>
  );
}
