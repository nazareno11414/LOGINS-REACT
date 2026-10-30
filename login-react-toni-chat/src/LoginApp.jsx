import "../src/assets/styles/styles_loginapp.css";
import { PanelLadoIzquierdo } from "../src/assets/components/PanelLadoIzquierdo.jsx";
import { PanelLadoDerecho } from "../src/assets/components/PanelLadoDerecho.jsx";
export function LoginApp() {
  return (
    <div>
      <div className="box-lado-izquierdo">
        <PanelLadoIzquierdo />
      </div>
      <div className="box-lado-derecho">
        <PanelLadoDerecho />
      </div>
    </div>
  );
}
