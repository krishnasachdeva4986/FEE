
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setMessage("Please fill all fields");
    } 
    else if (!email.includes("@") || !email.includes(".")) {
      setMessage("Enter a valid email");
    } 
    else if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
    } 
    else {
      setMessage("Registration successful!");

      setName("");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="page">
      <div className="form-card">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
