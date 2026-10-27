import terminosycondiciones from "../image/logos/terminosycondiciones.png";
import "../styles/style_terminosycondiciones.css";
export function PageTerminosYCondiciones({ setOpen }) {
  return (
    <div className="box-terminosycodinciones">
      <div className="box-titulo">
        <img className="logo-tyc" src={terminosycondiciones} alt="" />
        <h2 className="titulo-tyc">Términos y Condiciones</h2>
      </div>
      <p className="ultima-actu-tyc">Última actualización: Marzo 2026</p>
      <ul className="ul-tyc">
        <li>
          <h4>Uso del sistema</h4>
          <p>
            MMINT es una plataforma de monitoreo de precios en MercadoLibre. El
            acceso es personal e intransferible. Cada usuario es responsable de
            mantener la confidencialidad de sus credenciales de acceso.
          </p>
        </li>
        <li>
          <h4>Licencia de uso</h4>
          <p>
            El sistema se licencia por cliente según los módulos contratados (M1
            — Relevamiento, M2 — Control de Precios, M3 — Control de Mercado).
            Queda prohibida la cesión, sublicencia o acceso no autorizado a
            módulos no contratados.
          </p>
        </li>
        <li>
          <h4>Datos y confidencialidad</h4>
          <p>
            Toda la información cargada en el sistema (productos, precios,
            publicaciones) es confidencial y de uso exclusivo del cliente. MMINT
            no compartirá esta información con terceros salvo requerimiento
            legal.
          </p>
        </li>
        <li>
          <h4> Disponibilidad del servicio</h4>
          <p>
            MMINT se compromete a mantener el servicio disponible de lunes a
            viernes en horario hábil. Mantenimientos programados serán
            notificados con anticipación. No nos responsabilizamos por
            interrupciones fuera de nuestro control.
          </p>
        </li>
        <li>
          <h4>Responsabilidad</h4>
          <p>
            La información provista por el sistema es de carácter orientativo.
            Las decisiones comerciales tomadas en base a los datos del sistema
            son responsabilidad exclusiva del usuario.
          </p>
        </li>
        <li>
          <h4>Modificaciones</h4>
          <p>
            Nos reservamos el derecho de actualizar estos términos. Los cambios
            serán notificados con al menos 15 días de anticipación.
          </p>
        </li>
        <li>
          <h4>Contacto</h4>
          <p>
            Para consultas sobre estos términos:
            <a>soporte@mercadointeligente.com.ar</a>
          </p>
        </li>
      </ul>
      <button className="button-entendido" onClick={() => setOpen("")}>
        Entendido
      </button>
    </div>
  );
}
