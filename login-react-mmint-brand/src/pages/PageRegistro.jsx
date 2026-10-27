import "../styles/style_loginRight.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import imgLogoRight from "../image/mmint_logo.png";

export function PageRegistro({ users }) {
  const [userR, setUserR] = useState("");
  const [emailR, setEmailR] = useState("");
  const [passR, setPassR] = useState("");
  const [passR2, setPassR2] = useState("");

  const [botonOK, setButonOK] = useState(false);
  const [error, setError] = useState("");

  const [registerOK, setRegisterOK] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);

    if (
      userR.length === 0 &&
      emailR.length === 0 &&
      passR.length === 0 &&
      passR2.length === 0
    ) {
      return setError("Campos vacios");
    }

    if (userR.length < 10) {
      return setError("Usuario corto");
    }

    if (passR !== passR2 || passR.length === 0 || pass2.length === 0) {
      return setError("Revise las contraseñas");
    }

    if (true) {
      console.log("registrado");

      setUserR("");
      setEmailR("");
      setPassR("");
      setPassR2("");
      setButonOK(false);
    }
  };

  return (
    <div className="form-login">
      <div className="form-login-marca">
        <img src={imgLogoRight} alt="" />
        <p className="marca-nombre">MMINT - Brand</p>
      </div>
      <form className="form-login-campos" onSubmit={handleSubmit}>
        <label htmlFor="userRegister">Usuario</label>
        <input
          value={userR}
          onChange={(e) => setUserR(e.target.value)}
          id="userRegister"
          type="text"
          placeholder="Nazareno.."
        />
        <label htmlFor="emailRegister">Email</label>
        <input
          value={emailR}
          onChange={(e) => setEmailR(e.target.value)}
          id="emailRegister"
          type="email"
          placeholder="Nazareno@.."
        />
        <label htmlFor="passRegister">Contraseña</label>
        <input
          value={passR}
          onChange={(e) => setPassR(e.target.value)}
          id="passRegister"
          type="password"
          placeholder="*****"
        />
        <label htmlFor="passRegister2">repita la contraseña</label>
        <input
          value={passR2}
          onChange={(e) => setPassR2(e.target.value)}
          id="passRegister2"
          type="password"
          placeholder="*****"
        />
        {botonOK && <p className="error-registro">{error}</p>}
        <button className="btn-ingresar-login" onClick={() => setButonOK(true)}>
          Registrarse
        </button>
      </form>
      <Link className="btn-volver-login" to="/">
        ← Volver
      </Link>
    </div>
  );
}
