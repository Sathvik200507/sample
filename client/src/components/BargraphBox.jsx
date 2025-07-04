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

// Sample monthly data
const data = [
  { month: "Jan", donations: 1, points: 150 },
  { month: "Feb", donations: 2, points: 230 },
  { month: "Mar", donations: 1, points: 280 },
  { month: "Apr", donations: 3, points: 260 },
  { month: "May", donations: 2, points: 240 },
  { month: "Jun", donations: 13, points: 650 },
];

export default function BargraphBox() {
  return (
    <div className="bargraph-container">
      <h3>Monthly Activity</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            formatter={(value, name) => {
              return name === "points"
                ? [`${value}`, "Points"]
                : [`${value}`, "Donations"];
            }}
          />
          <Legend />
          <Bar dataKey="donations" fill="#00C49F" name="Donations" />
          <Bar dataKey="points" fill="#0088FE" name="Points" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
