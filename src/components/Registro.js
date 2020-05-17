import React, { Fragment } from 'react';

const Registro = ({llamada}) => {
    return ( 
        <Fragment>
        <div className="bg-white text-center border border-dark">
            <p>Se contacto: {llamada.persona}</p>
            <p>Telefono: {llamada.telefono}</p>
            <p>Hora: {llamada.hora}</p>
            <p>Fecha: {llamada.fecha}</p>
            <p>Motivo: {llamada.motivo}</p>
            <button className="btn btn-danger">Eliminar</button>
        </div>
        
        </Fragment>
     );
}
 
export default Registro;