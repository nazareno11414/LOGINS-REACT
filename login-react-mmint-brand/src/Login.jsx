import { PageRightForm } from "./pages/PageRightForm.jsx";
import { Usuarios } from "./usuariosprueba/prueba.jsx";
import { Routes, Route } from "react-router-dom";
import { PageRegistro } from "./pages/PageRegistro.jsx";
export function Login() {
  return (
    <div>
      <div>lado izquierdo</div>
      <div>
        <Routes>
          <Route path="/" element={<PageRightForm users={Usuarios} />} />
          <Route path="/registro" element={<PageRegistro users={Usuarios} />} />
        </Routes>
      </div>
    </div>
  );
}
