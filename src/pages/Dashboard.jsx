import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [userName, setUserName] = useState("");
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const data = JSON.parse(localStorage.getItem("complaints")) || [];

    if (user) {
      setUserName(user.name);
    }

    setComplaints(data);
  }, []);

  const total = complaints.length;

  const pending = complaints.filter(
    (c) => c.status === "Pending"
  ).length;

  const inProgress = complaints.filter(
    (c) => c.status === "In Progress"
  ).length;

  const resolved = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  return (
    <div className="container">
      <h1>Dashboard</h1>

      <h2>Welcome, {userName} 👋</h2>

      <p>Smart Complaint Management System</p>

      <br />

      <h3>Total Complaints: {total}</h3>
      <h3>Pending: {pending}</h3>
      <h3>In Progress: {inProgress}</h3>
      <h3>Resolved: {resolved}</h3>

      <br />

      <Link to="/complaint">
        <button>Register Complaint</button>
      </Link>

      <Link to="/complaints">
        <button>My Complaints</button>
      </Link>

      <Link to="/track">
        <button>Track Complaint</button>
      </Link>

      <br />
      <br />

      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}

export default Dashboard;