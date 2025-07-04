import React, { useEffect, useState } from "react";
import "../styles/profile.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF4D4F"];

export default function PieChartBox() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/profile")
      .then((res) => res.json())
      .then((user) => {
        if (user.donationPercentages) {
          setData(user.donationPercentages);
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="chart-container">
      <h3>Donation Types</h3>
      {data.length > 0 && (
        <ResponsiveContainer width={300} height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={90}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
