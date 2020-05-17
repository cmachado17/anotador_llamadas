import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Registro from './components/Registro';

function App() {

  const [llamadas, setLlamadas] = useState([])

  const crearRegistro = (llamada) => {
    setLlamadas([...llamadas, llamada]);
  }

  return (
    <Fragment>
      <div className="container">
        <div className="text-center">
          <h1>Anotador de llamadas</h1>
        </div>
        <div className="row">
          <div className="col col-sm-12 col-md-6">
            <h2>Ingresa una llamada</h2>
            <Formulario crearRegistro={crearRegistro}/>
          </div>
          <div className="col col-sm-12 col-md-6">
            <h2>Administra tus llamadas</h2>
            {
              llamadas.map(llamada => {
                return(
                  <Registro llamada={llamada} key={llamada.id}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
