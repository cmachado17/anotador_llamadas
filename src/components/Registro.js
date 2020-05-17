import React, { Fragment } from 'react';

const Registro = ({llamada, eliminarRegistro}) => {
    return ( 
        <Fragment>
        <div className="bg-white-opa text-left border border-dark p-2 mb-3">
            
            <p><span>Se contacto:</span> {llamada.persona}</p>
            <p><span>Teléfono:</span> {llamada.telefono}</p>
            <p><span>Hora:</span> {llamada.hora}</p>
            <p><span>Fecha:</span> {llamada.fecha}</p>
            <p><span>Motivo:</span> {llamada.motivo}</p>
            <div className="text-right">
            <button className="btn btn-danger" onClick={() => eliminarRegistro(llamada.id)}>Eliminar</button>
            </div>
        </div>
        
        </Fragment>
     );
}
 
export default Registro;