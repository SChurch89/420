import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import LinearProgressWithLabel from './LinearProgressWithLabel';
import PieActiveArc from '../PieChart'; // Import your PieActiveArc component

const data = [
  {
    name: "January",
    gains: 4000,
    losses: 2400,
    amt: 2400,
  },
  {
    name: "February",
    gains: 3000,
    losses: 1398,
    amt: 2210,
  },
  {
    name: "March",
    gains: 2000,
    losses: 9800,
    amt: 2290,
  },
  {
    name: "April",
    gains: 2780,
    losses: 3908,
    amt: 2000,
  },
  {
    name: "May",
    gains: 1890,
    losses: 4800,
    amt: 2181,
  },
  {
    name: "June",
    gains: 2390,
    losses: 3800,
    amt: 2500,
  },
  {
    name: "July",
    gains: 3490,
    losses: 4300,
    amt: 2100,
  },
];

const pieChartData = [
  {
    data: [
      { id: 0, value: 10, label: 'series A' },
      { id: 1, value: 15, label: 'series B' },
      { id: 2, value: 20, label: 'series C' },
    ],
  },
];

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Net Worth</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Debt</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Loans</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="gains" fill="#8884d8" />
            <Bar dataKey="losses" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="gains"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="losses" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <div className="goal-savings-container">
          <h4 style={{ color: "white" }}>Goal to Savings</h4>
          <LinearProgressWithLabel value={50} textColor="white" />
        </div>

        <PieActiveArc />
      </div>
    </main>
  );
}

export default Home;
