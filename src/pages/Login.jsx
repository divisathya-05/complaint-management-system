import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // Admin login
    if (
      role === "Admin" &&
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("role", "Admin");
      navigate("/admin");
      return;
    }

    // Staff login
    if (
      role === "Staff" &&
      email === "staff@gmail.com" &&
      password === "staff123"
    ) {
      localStorage.setItem("role", "Staff");
      navigate("/staff");
      return;
    }

    // User login
    if (role === "User") {
      const user = JSON.parse(localStorage.getItem("user"));

      if (
        user &&
        email === user.email &&
        password === user.password
      ) {
        localStorage.setItem("role", "User");
        navigate("/dashboard");
        return;
      }
    }

    alert("Invalid email, password or role!");
  }

  return (
    <div className="container">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
          <option value="Staff">Staff</option>
        </select>

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>

      </form>

      <p>
        Don't have an account?{" "}
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;