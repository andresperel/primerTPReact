import BotonCita from "../BotonCita";
import Campo from "../Campo";
import "./Formulario.css"

function Formulario() {
  return (
    <>
      <h2>Crear mi Cita</h2>

      <form>
        <Campo label="Nombre Mascota" type="text" placeholder="Nombre Mascota" />
        <Campo label="Nombre Dueño" type="text" placeholder="Nombre dueño de la mascota" />
        <Campo label="Fecha" type="date" />
        <Campo label="Hora" type="time" />

      <label>Sintomas</label><textarea name="sintomas" className="u-full-width"></textarea>

        <BotonCita/>
      </form>
    </>
  );
}

export default Formulario;