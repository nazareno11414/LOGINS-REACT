import imgLogoRight from "../image/mmint_logo.png";
import "../styles/style_loginRight.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { PageTerminosYCondiciones } from "./PageTerminosYCondiciones.jsx";
import { PagePrivacidad } from "./PagePrivacidad.jsx";

export function PageRightForm({ users }) {
  const [usuario, setUsuario] = useState("");
  const [contra, setContra] = useState("");
  const [logueado, setLogear] = useState(false);
  const [open, setOpen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usuario);
    console.log(contra);
    const validarUsuario = users.filter((u) => u.user === usuario);
    console.log(validarUsuario);
    const validarPassowrd = validarUsuario.map((p) =>
      p.pass === contra ? setLogear(true) : false,
    );
  };

  return (
    <div className="form-login">
      <div className="form-login-marca">
        <img src={imgLogoRight} alt="" />
        <p className="marca-nombre">MMINT - Brand</p>
      </div>
      <h1>Bienvenido</h1>
      <p>Ingresa con tu cuenta para acceder al panel de analisis</p>
      <form className="form-login-campos" onSubmit={handleSubmit}>
        <label htmlFor="user">Usuario</label>
        <input
          name=""
          id="user"
          placeholder="Naza..."
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <label htmlFor="pwd">Contraseña</label>
        <input
          type="password"
          id="pwd"
          placeholder="****"
          value={contra}
          onChange={(e) => setContra(e.target.value)}
        />
        <Link className="link-olvide" to="/restablecerpassword">
          ¿Olvidates la contraseña?
        </Link>
        <button className="btn-ingresar-login">Ingresar</button>
      </form>

      <div className="form-login-pie">
        <p>
          ¿No tenés cuenta? <Link to="/registro">Solicita la tuya</Link>
        </p>
        <p>
          ¿Preferís hablar ya?
          <a href="https://wa.me/5491162719850?text=Hola%2C%20quiero%20info%20sobre%20MMINT%20Brand">
            Escribinos por WhatsApp
          </a>
        </p>
        <p>
          Al ingresar aceptás los
          <button className="btn-tyc" onClick={() => setOpen("terminosDeUso")}>
            términos de uso
          </button>
          y la
          <button className="btn-tyc" onClick={() => setOpen("privacidad")}>
            política de privacidad
          </button>
        </p>
        {open === "terminosDeUso" && (
          <PageTerminosYCondiciones setOpen={setOpen} />
        )}
        {open === "privacidad" && <PagePrivacidad setOpen={setOpen} />}
        <p className="pie-version"> ©MMINT Brand V1.0</p>
      </div>
    </div>
  );
}
