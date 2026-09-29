import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Complaint from "./pages/Complaint";
import MyComplaints from "./pages/MyComplaints";
import TrackComplaint from "./pages/TrackComplaint";
import AdminDashboard from "./pages/AdminDashboard";
import AdminComplaints from "./pages/AdminComplaints";
import StaffDashboard from "./pages/StaffDashboard";

function Home() {
  return (
    <div className="container">
      <h1>Smart Complaint Management System</h1>

      <p>Register and track your complaints easily.</p>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/complaint" element={<Complaint />} />

        <Route path="/complaints" element={<MyComplaints />} />

        <Route path="/track" element={<TrackComplaint />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route
          path="/admin/complaints"
          element={<AdminComplaints />}
        />

        <Route path="/staff" element={<StaffDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;