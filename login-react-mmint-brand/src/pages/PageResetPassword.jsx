import imgLogoRight from "../image/mmint_logo.png";
import { useState } from "react";
export function PageResetPassword({ users }) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarios = users.map((e) => {
      e.user === user
        ? setError("Se ha enviado al mail el link para recuperar la contraseña")
        : setError("Error, usuario no encontrado");
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <img src={imgLogoRight} alt="" />
        </div>
        <h2>Complete los datos para solicitar el cambio de contraseña</h2>
        <label htmlFor="usuariovalue">usuario</label>
        <input
          type="text"
          className="usuariovalue"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label htmlFor="emailvalue">email</label>
        <input
          type="email"
          name="emailvalue"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>enviar solicitud</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
