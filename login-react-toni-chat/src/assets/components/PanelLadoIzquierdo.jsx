import "../styles/styles_panelizquierdo.css";
import toniLogoLogin from "../imgs/toni-logo-login.png";
import toniSaludando from "../imgs/toni-saluda-login.png";
export function PanelLadoIzquierdo() {
  return (
    <section className="panel-izquierdo">
      <div className="box-izquierdo">
        <img src={toniLogoLogin} alt="logo toni" />
        <h2 className="panel-etiqueta">Panel de comercio</h2>
      </div>
      <div className="personaje-toni">
        <img src={toniSaludando} alt="Toni saludando" />
      </div>
      <div className="escena" aria-hidden="true">
        <div className="flota flota--cliente">
          <span className="flota__quien">Cliente · WhatsApp</span>
          <p>Hola, ¿tienen pastillas de freno para un Gol Trend 2016?</p>
        </div>

        <div className="flota flota--toni">
          <span className="flota__quien flota__quien--toni">Toni</span>
          <p>
            Sí, las tengo. <b>$38.500</b> · stock: 12
          </p>
        </div>

        <div className="flota flota--ticket">
          <span className="flota__punto"></span>
          <div>
            <b>Pedido #1042</b>
            <small>Derivado a ventas · hace 2 min</small>
          </div>
        </div>
      </div>

      <div className="esLogan">
        <h2 className="titular">
          Tu marca <span className="acento"> bajo control</span>
        </h2>
        <p className="bajada-marca">Entra al panel para ver cómo vende Toni</p>
      </div>
    </section>
  );
}
