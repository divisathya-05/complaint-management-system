import { useState } from "react";
import { Link } from "react-router-dom";

function TrackComplaint() {
  const [complaintId, setComplaintId] = useState("");
  const [complaint, setComplaint] = useState(null);

  function handleTrack(e) {
    e.preventDefault();

    const complaints =
      JSON.parse(localStorage.getItem("complaints")) || [];

    const foundComplaint = complaints.find(
      (item) => item.id.toString() === complaintId
    );

    if (foundComplaint) {
      setComplaint(foundComplaint);
    } else {
      alert("Complaint not found!");
      setComplaint(null);
    }
  }

  return (
    <div className="container">
      <h1>Track Complaint</h1>

      <p>Enter your Complaint ID</p>

      <form onSubmit={handleTrack}>
        <input
          type="text"
          placeholder="Enter Complaint ID"
          value={complaintId}
          onChange={(e) => setComplaintId(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">
          Track
        </button>
      </form>

      {complaint && (
        <div>
          <h2>Complaint Details</h2>

          <p>
            <b>Complaint ID:</b> {complaint.id}
          </p>

          <p>
            <b>Title:</b> {complaint.title}
          </p>

          <p>
            <b>Category:</b> {complaint.category}
          </p>

          <p>
            <b>Location:</b> {complaint.location}
          </p>

          <p>
            <b>Status:</b> {complaint.status}
          </p>
        </div>
      )}

      <br />

      <Link to="/dashboard">
        Back to Dashboard
      </Link>
    </div>
  );
}

export default TrackComplaint;