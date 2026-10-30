import "../styles/style_box_error.css";
import alert from "../imgs/logos/alert-triangle.png";
export function TarjetaError({ text }) {
  return (
    <div className="box-error">
      <img src={alert} alt="alerta" />
      <p>{text}</p>
    </div>
  );
}
