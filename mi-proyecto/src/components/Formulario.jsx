import Campo from "./Campo";
import Boton from "./Boton";
import "./formulario.css";

function Formulario() {
  return (
    <div className="formulario">
      <h2>Crear mi cita</h2>

      <form>
        <Campo label="Nombre Mascota" type="text" />
        <Campo label="Nombre Dueño" type="text" />
        <Campo label="Fecha" type="date" />
        <Campo label="Hora" type="time" />
        <Campo label="Síntomas" textarea />

        <Boton texto="Agregar Cita" />
      </form>
    </div>
  );
}

export default Formulario;