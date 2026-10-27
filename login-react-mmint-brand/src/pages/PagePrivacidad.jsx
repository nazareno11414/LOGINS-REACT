import logoprivacidad from "../image/logos/privacidad.png";
import "../styles/style_privacidad.css";
export function PagePrivacidad({ setOpen }) {
  return (
    <div className="privacidad">
      <div className="box-pri">
        <img src={logoprivacidad} alt="logo de privacidad" />
        <h2>Política de Privacidad</h2>
        <p>Política de Privacidad</p>
      </div>
      <ul className="lista-privacidad">
        <li>
          <h4>Cómo usamos los datos</h4>
          <li>
            <span>Datos de acceso:</span>
            usuario y contraseña (encriptada) para autenticar el ingreso al
            sistema.
          </li>
          <li>
            <span>Datos de uso:</span>registros de acciones realizadas dentro
            del sistema (auditoría interna).
          </li>
          <li>
            <span>Datos de negocio:</span>productos, publicaciones, precios y
            capturas cargadas por el usuario.
          </li>
        </li>

        <li>
          <h4>Cómo usamos los datos</h4>
          <li>Para proveer el servicio de monitoreo de precios contratado.</li>
          <li>Para mejorar la plataforma y detectar errores.</li>
          <li>
            Para comunicaciones relacionadas exclusivamente con el servicio.
          </li>
        </li>
        <li>
          <h4>Almacenamiento y seguridad</h4>
          <p>
            Los datos se almacenan en servidores seguros. Implementamos medidas
            técnicas y organizativas para proteger la información contra accesos
            no autorizados, pérdida o alteración.
          </p>
        </li>
        <li>
          <h4>Datos de terceros (MercadoLibre)</h4>
          <p>
            El sistema captura información pública de MercadoLibre (precios,
            descripciones, vendedores). Esta información es de carácter público
            y su recopilación está dentro del marco de uso aceptado de la
            plataforma.
          </p>
        </li>
        <li>
          <h4>Tus derechos</h4>
          Podés solicitar en cualquier momento el acceso, corrección o
          eliminación de tus datos personales escribiendo a
          <a>soporte@mercadointeligente.com.ar</a>.
        </li>
        <li>
          <h4>Cookies</h4>
          <p>
            El sistema utiliza localStorage del navegador únicamente para
            mantener la sesión activa. No usamos cookies de rastreo ni
            publicidad.
          </p>
        </li>
      </ul>
      <button className="btn-entendido" onClick={() => setOpen("")}>
        Entendido
      </button>
    </div>
  );
}
