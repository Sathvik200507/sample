import { useEffect, useState } from "react";
import "../styles/report.css";

export default function Report() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reports", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setReports(data))
      .catch((err) => console.error("Error fetching reports:", err));
  }, []);

  const handleAccept = (reportId) => {
    fetch(`http://localhost:5000/reports/${reportId}/accept`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((updated) => {
        setReports((prev) =>
          prev.map((r) => (r._id === reportId ? { ...r, status: "Accepted" } : r))
        );
      });
  };

  return (
    <>
      <div className="report-wrapper">
        {reports.map((report, idx) => (
          <div className="report-card" key={report._id}>
            <div className="report-header">
              <h3>Report #{idx + 1}</h3>
              <span className={`status ${report.status?.toLowerCase() || "pending"}`}>
                {report.status || "Pending"}
              </span>
            </div>
            <img
              src={`http://localhost:5000${report.photo}`}
              alt="Report visual"
              className="report-img"
            />

            <div className="report-info">
              <p><i className="fa-solid fa-location-dot"></i> {report.location}</p>
              <p><i className="fa-solid fa-comment-dots"></i> {report.additionalInformation}</p>
              <p><i className="fa-solid fa-clock"></i> {new Date(report.createdAt).toLocaleString()}</p>
            </div>
            {report.status !== "Accepted" && (
              <button className="accept-btn" onClick={() => handleAccept(report._id)}>
                Accept Report
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
