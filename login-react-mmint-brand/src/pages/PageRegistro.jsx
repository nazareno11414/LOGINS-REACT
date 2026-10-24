import "../styles/style_loginRight.css";
import { Routes, Route, Link } from "react-router-dom";
import imgLogoRight from "../image/mmint_logo.png";
export function PageRegistro() {
  return (
    <div className="form-login">
      <div className="form-login-marca">
        <img src={imgLogoRight} alt="" />
        <p className="marca-nombre">MMINT - Brand</p>
      </div>
      <form className="form-login-campos">
        <label htmlFor="">Usuario</label>
        <input type="text" placeholder="Nazareno.." />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Nazareno@.." />
        <label htmlFor="">Contraseña</label>
        <input type="text" placeholder="*****" />
        <label htmlFor="">repita la contraseña</label>
        <input type="text" placeholder="*****" />
        <button className="btn-ingresar-login">Registrarse</button>
      </form>
      <Link className="btn-volver-login" to="/">
        ← Volver
      </Link>
    </div>
  );
}
