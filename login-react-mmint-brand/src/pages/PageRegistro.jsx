import { useNavigate } from "react-router-dom";
export function PageRegistro() {
  const navigate = useNavigate();
  return (
    <div>
      <form action="">
        <label htmlFor="">Usuario</label>
        <input type="text" />
        <label htmlFor="">Emal</label>
        <input type="text" />
        <label htmlFor="">contraseña</label>
        <input type="text" />
        <label htmlFor="">repita la contraseña</label>
        <input type="text" />
        <button>Registrarse</button>
      </form>
      <button onClick={() => navigate(-1)}>← Volver</button>
    </div>
  );
}
