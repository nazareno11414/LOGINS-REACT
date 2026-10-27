import "../styles/style_loginRight.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import imgLogoRight from "../image/mmint_logo.png";

export function PageRegistro({ users }) {
  const [userR, setUserR] = useState("");
  const [emailR, setEmailR] = useState("");
  const [marcaOEmpresa, setMarcaOEmpresa] = useState("");
  const [cell, setCell] = useState("");
  const [motivoTextArea, setMotivoTextArea] = useState("");

  const [enviar, setEnviar] = useState("Enviar");
  const [estadoEnviar, setEstadoEnviar] = useState("btn-ingresar-login");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //btn-envio-formulario-alta,btn-envio-formulario-no-alta

    if (userR.trim("").length === 0) {
      setEstadoEnviar("btn-envio-formulario-no-alta");
      setError("Complete el Nombre");
      return;
    }
    if (emailR.trim("").length === 0 || !emailR.includes("@")) {
      setEstadoEnviar("btn-envio-formulario-no-alta");
      setError("Complete el Email");
      return;
    }
    if (cell.trim("").length === 0 || !/^\d+$/.test(cell.trim())) {
      setEstadoEnviar("btn-envio-formulario-no-alta");
      setError("Error, complete el celular");
      return;
    }
    if (motivoTextArea.trim("").length === 0) {
      setEstadoEnviar("btn-envio-formulario-no-alta");
      setError("Complete la necesidad a controlar");
      return;
    }

    setEnviar("Enviado");
    setEstadoEnviar("btn-envio-formulario-alta");
  };

  return (
    <div className="form-login">
      <div className="form-login-marca">
        <img src={imgLogoRight} alt="logo de mmint" />
        <p className="marca-nombre">MMINT - Brand</p>
      </div>
      <form className="form-login-campos" onSubmit={handleSubmit}>
        <label htmlFor="userRegister">
          Nombre<span>*</span>
        </label>
        <input
          value={userR}
          onChange={(e) => setUserR(e.target.value)}
          id="userRegister"
          type="text"
          placeholder="Nazareno.."
        />
        <label htmlFor="emailRegister">
          Email<span>*</span>
        </label>
        <input
          value={emailR}
          onChange={(e) => setEmailR(e.target.value)}
          id="emailRegister"
          type="text"
          placeholder="Nazareno@.."
        />
        <label htmlFor="passRegister">Marca o Empresa</label>
        <input
          value={marcaOEmpresa}
          onChange={(e) => setMarcaOEmpresa(e.target.value)}
          id="passRegister"
          type="text"
          placeholder="Bahco.."
        />
        <label htmlFor="passRegister2">
          WhatsApp o teléfono<span>*</span>
        </label>
        <input
          value={cell}
          onChange={(e) => setCell(e.target.value)}
          id="passRegister2"
          type="text"
          placeholder="1140..."
        />
        <div>
          <label htmlFor="motivo">
            ¿Qué necesitás controlar?<span>*</span>
          </label>
          <textarea
            name="motivo"
            value={motivoTextArea}
            onChange={(e) => setMotivoTextArea(e.target.value)}
          >
            Mis productos..
          </textarea>
          <p>
            Por ejemplo: cuántas marcas, cuántos productos y si trabajás con
            distribuidores.
          </p>
        </div>
        <span>*Campos obligatorios</span>

        <button className={estadoEnviar}>{enviar}</button>
        {error && <p>{error}</p>}
        <footer>Usamos tus datos solo para responder tu consulta.</footer>
      </form>
      <Link className="btn-volver-login" to="/">
        ← Volver
      </Link>
    </div>
  );
}
