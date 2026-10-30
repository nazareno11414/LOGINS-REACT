import arrowleft from "../imgs/logos/arrow-narrow-left.png";
import logouser from "../imgs/logos/user.png";
import logopassword from "../imgs/logos/lock-check.png";
import showpassword from "../imgs/logos/eye-check.png";
import dontshowpassword from "../imgs/logos/eye-off.png";
import "../styles/style_login_panel_derecho.css";
import { useState } from "react";

import { TarjetaError } from "../components/TarjetaError.jsx";

export function PanelLadoDerecho() {
  const usuarioLabel = "usuario";
  const contraLabel = "contraseña";
  const ingresarForm = "ingresar";

  const [usuario, setUsuario] = useState("");
  const [userPass, setUserPass] = useState("");
  const [verPassword, setVerPassword] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (usuario.trim().length === 0) {
      setError("usuario");
      return;
    }
    if (userPass.trim().length === 0) {
      setError("pass");
      return;
    }
  };
  const cambiarTypePass = verPassword ? "text" : "password";
  return (
    <div>
      <div>
        <a className="volver-al-panel" href="https://www.toni-chat.com/">
          <img src={arrowleft} alt="volver" />
          volver al inicio
        </a>
        <h2>Bienvenido de nuevo</h2>
        <p>Ingresa tu cuenta para acceder al panel</p>
        <form onSubmit={handleSubmit}>
          <div>
            <img src={logouser} alt="" />
            <label htmlFor="userLabel">{usuarioLabel}</label>
            <input
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              id="userLabel"
              type="text"
            />
            {error === "usuario" && <TarjetaError text="Revisa el usuario" />}
          </div>
          <div>
            <img src={logopassword} alt="" />
            <label htmlFor="passwordLabel">{contraLabel}</label>
            <input
              value={userPass}
              onChange={(e) => setUserPass(e.target.value)}
              id="passwordLabel"
              type={cambiarTypePass}
            />
            {error === "pass" && <TarjetaError text="Revisa la contraseña" />}
            <button
              className="verContra"
              type="button"
              onClick={() => setVerPassword(!verPassword)}
            >
              {!verPassword && <img src={dontshowpassword} alt="" />}
              {verPassword && <img src={showpassword} alt="" />}
            </button>
          </div>
          <button>{ingresarForm}</button>
        </form>
        <p>
          ¿Problemas para logearte?{" "}
          <a href="https://api.whatsapp.com/send/?phone=5491162719850&text=Hola%2Ctengo+un+problema+para+acceder+a+Toni&type=phone_number&app_absent=0">
            Escribinos
          </a>
        </p>
        <div>
          <p>
            ¿No tenes cuenta?{" "}
            <a href="https://api.whatsapp.com/send/?phone=5491136644589&text=Hola%21+Quiero+sumar+a+Toni+a+mi+WhatsApp&type=phone_number&app_absent=0">
              solicita la tuya
            </a>
          </p>
          <div className="box-politica-priv-elim">
            <a href="https://www.toni-chat.com/privacidad">
              Política de privacidad
            </a>
            <a href="https://www.toni-chat.com/condiciones">
              Condiciones del servicio
            </a>
            <a href="https://www.toni-chat.com/eliminar-datos">
              Eliminacion de datos
            </a>
          </div>
        </div>
      </div>
      <footer>© 2026 MMINT Brand · Mercado Inteligente</footer>
    </div>
  );
}
