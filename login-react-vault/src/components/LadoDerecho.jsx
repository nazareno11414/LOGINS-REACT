import logouser from "../imgs/user.png";
import logolock from "../imgs/lock.png";
import eyeOpen from "../imgs/eye.png";
import eyeClose from "../imgs/eye-off.png";
import "../styles/styles_loginderecho.css";
import imglogo from "../imgs/logo.png";
import { useState } from "react";
export function LadoDerecho() {
  const [showPassword, setShowPassword] = useState(false);
  const varShowPass = showPassword ? "text" : "password";
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (user.trim("").length === 0) {
      setError("Error, revisa el usuario");
      return;
    }
    if (pass.trim("").length === 0) {
      setError("Revisa la contraseña");
      return;
    }
    console.log(pass);
  };
  return (
    <div>
      <div className="box-login">
        <div className="box-logo">
          <img src={imglogo} alt="" />
          <h2>
            MMINT <span>VAULT</span>
          </h2>
          <p>Gestos de contraseñas</p>
        </div>
        <h4>Bienvenidos</h4>
        <p>Ingresá tus credenciales para acceder</p>
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
              placeholder="Naza.."
            />
          </div>
          <div>
            <img src={logolock} alt="" />
            <label htmlFor="">Contraseña</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type={varShowPass}
              placeholder="****"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword && <img src={eyeOpen} alt="ver pass" />}
              {!showPassword && <img src={eyeClose} alt="ocultar pass" />}
            </button>
          </div>
          <button>Ingresar</button>
          {error.length > 0 && <p className="modal-error">{error}</p>}
        </form>
      </div>
    </div>
  );
}
