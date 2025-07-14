import Navbar from '../components/Navbar';
import Report from '../components/report';
import Footer from '../components/footer';

export default function Volunteer() {
  return (
    <>
      <Navbar btn2="Profile" btn3="Logout" />

      <main className="volunteer-page">
        <h2 style={{ textAlign: 'center', margin: '30px 0 10px' }}>Community Reports</h2>
        <p style={{ textAlign: 'center', color: '#6b7280' }}>
          Browse and manage the recent contributions made by the community.
        </p>

        <div style={{ padding: '0 2rem', marginTop: '30px' }}>
          <Report />
        </div>
      </main>

      <Footer />
    </>
  );
}
