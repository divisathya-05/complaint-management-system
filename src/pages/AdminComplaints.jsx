import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const savedComplaints =
      JSON.parse(localStorage.getItem("complaints")) || [];

    setComplaints(savedComplaints);
  }, []);

  function updateStatus(id, newStatus) {
    const updatedComplaints = complaints.map((complaint) =>
      complaint.id === id
        ? { ...complaint, status: newStatus }
        : complaint
    );

    setComplaints(updatedComplaints);

    localStorage.setItem(
      "complaints",
      JSON.stringify(updatedComplaints)
    );

    alert("Status Updated!");
  }

  return (
    <div className="container">
      <h1>All Complaints</h1>

      {complaints.length === 0 ? (
        <p>No complaints available.</p>
      ) : (
        complaints.map((complaint) => (
          <div key={complaint.id}>
            <h2>{complaint.title}</h2>

            <p>
              Complaint ID: {complaint.id}
            </p>

            <p>
              Category: {complaint.category}
            </p>

            <p>
              Location: {complaint.location}
            </p>

            <p>
              Description: {complaint.description}
            </p>

            <p>
              Current Status: {complaint.status}
            </p>

            <select
              value={complaint.status}
              onChange={(e) =>
                updateStatus(complaint.id, e.target.value)
              }
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>

            <hr />
            <br />
          </div>
        ))
      )}

      <Link to="/admin">
        Back to Admin Dashboard
      </Link>
    </div>
  );
}

export default AdminComplaints;