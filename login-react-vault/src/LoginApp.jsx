import { LadoDerecho } from "./components/LadoDerecho.jsx";
import { LadoIzquierdo } from "./components/LadoIzquierdo.jsx";
export function LoginApp() {
  return (
    <div className="box-login">
      <div className="box-login-izquierdo">
        <LadoIzquierdo />
      </div>
      <div className="box-login-derecho">
        <LadoDerecho />
      </div>
    </div>
  );
}
