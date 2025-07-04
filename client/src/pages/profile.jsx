import { useEffect, useState } from 'react';
import ProfileBox from '../components/ProfileBox';
import NavBar from '../components/Navbar';
import PieChartBox from '../components/PieChartBox';
import BargraphBox from '../components/BargraphBox';

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
      <div className="ProfileBoxes">
      {user && <ProfileBox user={user} />}
      {user && <PieChartBox data={user.donationPercentages} />}
      <BargraphBox />
      </div>
    </>
  );
}
