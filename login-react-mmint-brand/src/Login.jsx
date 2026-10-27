import { PageRightForm } from "./pages/PageRightForm.jsx";
import { Usuarios } from "./usuariosprueba/prueba.jsx";
import { Routes, Route } from "react-router-dom";
import { PageRegistro } from "./pages/PageRegistro.jsx";
import { PageLeft } from "./pages/PageLeft.jsx";
import { PageResetPassword } from "./pages/PageResetPassword.jsx";
import "./styles/style_login.css";
export function Login() {
  return (
    <div className="login-pagina">
      <div className="login-izquierda">
        <PageLeft />
      </div>
      <div className="login-derecha">
        <Routes>
          <Route path="/" element={<PageRightForm users={Usuarios} />} />
          <Route path="/registro" element={<PageRegistro users={Usuarios} />} />
          <Route
            path="/restablecerpassword"
            element={<PageResetPassword users={Usuarios} />}
          />
        </Routes>
      </div>
    </div>
  );
}
