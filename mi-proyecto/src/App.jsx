import { useState } from "react";
import Header from "./components/Header";
import Contenedor from "./components/Contenedor";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  const [citas] = useState([
    {
      id: 1,
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      id: 2,
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    }
  ]);

  return (
    <>
      <Header />
      <Contenedor>
        <Formulario />
        <Listado citas={citas} />
      </Contenedor>
    </>
  );
}

export default App;