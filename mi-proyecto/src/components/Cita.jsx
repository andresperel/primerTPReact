    function Cita({ cita }) {
  return (
    <div className="cita">
      <p><span>Mascota:</span> {cita.mascota}</p>
      <p><span>Dueño:</span> {cita.dueño}</p>
      <p><span>Fecha:</span> {cita.fecha}</p>
      <p><span>Hora:</span> {cita.hora}</p>
      <p><span>Síntomas:</span> {cita.sintomas}</p>

      <button>Eliminar ×</button>
    </div>
  );
}

export default Cita;