import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import '../styles/profile.css';
export default function BargraphBox({ data }) {
  return (
    <div className="bargraph-container">
      <h3>Monthly Activity</h3>
      {data && data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value, name) =>
                name === "points"
                  ? [`${value}`, "Points"]
                  : [`${value}`, "Donations"]
              }
            />
            <Legend />
            <Bar dataKey="donations" fill="#00C49F" name="Donations" />
            <Bar dataKey="points" fill="#0088FE" name="Points" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p style={{ marginTop: "40px", color: "#999" }}>No activity data available yet.</p>
      )}
    </div>
  );
}
