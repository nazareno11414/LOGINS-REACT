import lupa from "../image/logos/search.png";
import alerta from "../image/logos/alert-triangle.png";
import dash from "../image/logos/layout-dashboard.png";
import "../styles/style_leftLogin.css";
export function PageLeft() {
  return (
    <div className="panel-presentacion">
      <h2 className="presentacion-titulo">
        Tu marca bajo control. Siempre
        <span className="titulo-destacado">
          Precios, sellers y publicaciones.
        </span>
      </h2>
      <p className="presentacion-texto">
        MMINT Brand te da visibilidad total sobre cómo se venden tus productos
        en el mercado. Detectá desvíos, controlá sellers autorizados y tomá
        decisiones basadas en datos reales
      </p>
      <div className="beneficio">
        <img className="beneficio-icono" src={lupa} alt="" />
        <p>
          <span>Monitoreo de publicaciones</span> en MercadoLibre en tiempo real
        </p>
      </div>
      <div className=" beneficio">
        <img className="beneficio-icono" src={alerta} alt="" />
        <p>
          <span>Alertas automáticas</span> cuando un seller desvía el precio
        </p>
      </div>
      <div className="beneficio">
        <img className="beneficio-icono" src={dash} alt="" />
        <p>
          <span>Panel unificado</span> por marca, seller, modelo y versión
        </p>
      </div>
      <p className="presentacion-pie">
        © 2026 MMINT Brand · Mercado Inteligente
      </p>
    </div>
  );
}
