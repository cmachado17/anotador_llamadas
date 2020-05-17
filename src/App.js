import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Registro from './components/Registro';

function App() {

  let llamadasArchivadas = JSON.parse(localStorage.getItem('llamadas'))

  if(!llamadasArchivadas){
    llamadasArchivadas=[];
  }

  //obtener las llamadas

  const [llamadas, setLlamadas] = useState(llamadasArchivadas)


  //Cuando el state cambie guardar en localstorage

  useEffect(() =>{
    let llamadasArchivadas = JSON.parse(localStorage.getItem('llamadas'));
    if(llamadasArchivadas){
      localStorage.setItem('llamadas', JSON.stringify(llamadas))
    }else{
      localStorage.setItem('llamadas', JSON.stringify([]));
    }
  },[llamadas] )


  //añadir al registro

  const crearRegistro = (llamada) => {
    setLlamadas([...llamadas, llamada]);
  }

  //eliminar del registro

  const eliminarRegistro = id => {
    const nuevasLlamadas = llamadas.filter(llamada => llamada.id !== id)
    setLlamadas(nuevasLlamadas);
  }

  const titulo = llamadas.length === 0 ? "No hay llamadas" : "Administra tus llamadas";

  return (
    <Fragment>
      <div className="container">
        <div className="text-center">
          <h1>Anotador de llamadas</h1>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Formulario crearRegistro={crearRegistro}/>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>{titulo}</h2>
            {
              llamadas.map(llamada => {
                return(
                  <Registro llamada={llamada} key={llamada.id} eliminarRegistro={eliminarRegistro}/>
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
