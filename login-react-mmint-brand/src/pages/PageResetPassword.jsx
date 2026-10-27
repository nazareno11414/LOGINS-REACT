import imgLogoRight from "../image/mmint_logo.png";
import "../styles/style_resetpassword.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
export function PageResetPassword({ users }) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [enviar, setEnviar] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarios = users.map((e) => {
      if (e.user === user) {
        setEnviar("mensaje-final-enviado");
        setError("Email enviado, por favor revise la casilla");
      } else {
        setEnviar("mensaje-final-error");
        setError("Usuario no encontrado");
      }
    });
  };

  return (
    <div className="box-reset-password">
      <form onSubmit={handleSubmit} className="form-reset-password">
        <div>
          <img src={imgLogoRight} alt="logo de mmint" />
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
      <Link className="btn-volver-login" to="/">
        ← Volver
      </Link>
      {error && <p className={enviar}>{error}</p>}
    </div>
  );
}
