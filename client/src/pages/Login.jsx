import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        { username, password },
        { withCredentials: true }
      );
      setUserInfo(data);
      setRedirect(true);
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "Error desconocido");
    }
  }

  function handleUsernameChange(ev) {
    setUsername(ev.target.value);
    setError(null);
  }

  function handlePasswordChange(ev) {
    setPassword(ev.target.value);
    setError(null);
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div class="container mt-5" >
      <form class="row needs-validation justify-content-center" onSubmit={handleSubmit}>
        <div class="col-3 bg-secondary p-5 border-1">
          <h1>Inicio de Sesión</h1>
          <label for="username" class="form-label">Usuario</label>
          <input type="text" class="form-control" id="username" name="username" value={username} onChange={handleUsernameChange} required />
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="password" name="password" value={password} onChange={handlePasswordChange} required />
        </div>
        {error && <p class="text-danger">{error}</p>}
        <div class="col-12">
          <button type="submit" class="btn btn-primary mt-2">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
};

export default Login;