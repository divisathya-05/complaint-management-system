import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Complaint() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !category || !location || !description) {
      alert("Please fill all fields");
      return;
    }

    const complaint = {
      id: Date.now(),
      title,
      category,
      location,
      description,
      status: "Pending",
    };

    const oldComplaints =
      JSON.parse(localStorage.getItem("complaints")) || [];

    oldComplaints.push(complaint);

    localStorage.setItem(
      "complaints",
      JSON.stringify(oldComplaints)
    );

    alert("Complaint Registered Successfully!");

    navigate("/complaints");
  }

  return (
    <div className="container">
      <h1>Register Complaint</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Complaint Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Water">Water</option>
          <option value="Electricity">Electricity</option>
          <option value="Road">Road</option>
          <option value="Sanitation">Sanitation</option>
          <option value="Transport">Transport</option>
        </select>

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <textarea
          placeholder="Describe your complaint"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">
          Submit Complaint
        </button>

      </form>

      <Link to="/dashboard">
        Back to Dashboard
      </Link>
    </div>
  );
}

export default Complaint;