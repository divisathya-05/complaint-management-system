import { Link } from "react-router-dom";

function StaffDashboard() {
  return (
    <div className="container">
      <h1>Staff Dashboard</h1>

      <p>View and manage assigned complaints.</p>

      <Link to="/admin/complaints">
        <button>View Complaints</button>
      </Link>

      <br />
      <br />

      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}

export default StaffDashboard;