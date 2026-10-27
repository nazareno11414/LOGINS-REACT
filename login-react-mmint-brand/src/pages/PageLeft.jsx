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
      <aside className="panel-preview" aria-label="Vista previa ilustrativa">
        <div className="panel-preview-cabecera">
          <span className="indicador-activo" />
          <span>Market monitor</span>
          <small>Vista previa</small>
        </div>
        <div className="panel-preview-fila">
          <span>Sellers</span>
          <strong>142</strong>
          <em>▲ 6.4%</em>
        </div>
        <div className="panel-preview-fila">
          <span>Publicaciones</span>
          <strong>1.284</strong>
          <em>▲ 12.6%</em>
        </div>
        <div className="panel-preview-fila">
          <span>Variación</span>
          <strong>+8.4%</strong>
          <em>▲</em>
        </div>
      </aside>
      <div className="dato-flotante dato-flotante-uno" aria-hidden="true">
        <strong>$ 52.490</strong>
        <span>▲ +12.4%</span>
      </div>
      <div className="dato-flotante dato-flotante-dos" aria-hidden="true">
        <strong>$ 48.500</strong>
        <span>▲ +6.7%</span>
      </div>
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
