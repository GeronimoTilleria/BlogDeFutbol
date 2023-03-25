import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (ev) => {
    ev.preventDefault();
    if (!username || !password) {
      setError("Please enter a username and password");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/register", {
        username,
        password,
      });
      if (response.status === 200) {
        alert("Registration successful!");
      } else {
        setError("Registration failed");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <form className="register" onSubmit={handleRegister}>
      <h1>Register</h1>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default Register;
