import logouser from "../imgs/user.png";
import logopass from "../imgs/lock-cancel.png";
import showPass from "../imgs/eye.png";
import dontShowPass from "../imgs/eye-off.png";
import logo from "../imgs/logodash.png";
import { useState } from "react";
import "../styles/style_loginderecho.css";
export function LadoDerecho() {
  const [verPass, setVerPass] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const botonMostrarPass = verPass ? "text" : "password";
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (user.trim("").length === 0) {
      setError("Error, reingrese el usuario");
      return;
    }
    if (pass.trim("").length === 0) {
      setError("Error, reingrese la contraseña");
      return;
    }
  };
  return (
    <div>
      <div>
        <img src={logo} alt="" />
        <p>
          TEAM <span>MERCADO INTELIGENTE</span>
        </p>
      </div>
      <h3>Bienvenido</h3>
      <p>ingresa al panel</p>
      <form onSubmit={handleSubmit}>
        <div>
          <img src={logouser} alt="" />
          <label htmlFor="">Usuario</label>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            name=""
            id=""
          />
        </div>
        <div>
          <img src={logopass} alt="" />
          <label>Contraseña</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type={botonMostrarPass}
          />
          <button type="button" onClick={() => setVerPass(!verPass)}>
            {verPass && <img src={showPass} alt="" />}
            {!verPass && <img src={dontShowPass} alt="" />}
          </button>
        </div>
        <button>Ingresar</button>
        {error.length != 0 && <p>{error}</p>}
      </form>
      <p>
        ¿Problema para ingresar?
        <a href="https://api.whatsapp.com/send/?phone=5491140644367&text&Hola%2C+tengo+un+problema+para+ingresar+al+dash&type=phone_number&app_absent=0">
          Contacte con el administrador
        </a>
      </p>
    </div>
  );
}
