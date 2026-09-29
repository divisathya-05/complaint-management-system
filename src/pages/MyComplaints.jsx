import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const savedComplaints =
      JSON.parse(localStorage.getItem("complaints")) || [];

    setComplaints(savedComplaints);
  }, []);

  return (
    <div className="container">
      <h1>My Complaints</h1>

      {complaints.length === 0 ? (
        <div>
          <p>No complaints found.</p>

          <Link to="/complaint">
            <button>Register Complaint</button>
          </Link>
        </div>
      ) : (
        <div>
          {complaints.map((complaint) => (
            <div key={complaint.id}>
              <h2>{complaint.title}</h2>

              <p>Complaint ID: {complaint.id}</p>

              <p>Category: {complaint.category}</p>

              <p>Location: {complaint.location}</p>

              <p>Description: {complaint.description}</p>

              <p>Status: {complaint.status}</p>

              <hr />
              <br />
            </div>
          ))}
        </div>
      )}

      <Link to="/dashboard">
        Back to Dashboard
      </Link>
    </div>
  );
}

export default MyComplaints;