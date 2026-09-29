import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>

      <p>Manage all complaints here.</p>

      <Link to="/complaints">
        <button>View All Complaints</button>
      </Link>

      <br />
      <br />

      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}

export default AdminDashboard;