import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = ({crearRegistro}) => {
  const [llamada, setLlamada] = useState({
    persona: "",
    telefono: "",
    hora: "",
    fecha: "",
    motivo: "",
  });

  const [error, setError] = useState(false);

  //Funcion que se ejecuta cuando el usuario escribe en el input

  const handleLlamada = (e) => {
    setLlamada({
      ...llamada,
      [e.target.name]: e.target.value,
    });
  };

  //extraer los valores

  const { persona, telefono, hora, fecha, motivo } = llamada;

  //Al enviar el formulario

  const handleSave = (e) => {
    e.preventDefault();

    //validacion

    if (
      persona.trim() === "" ||
      telefono.trim() === "" ||
      hora.trim() === "" ||
      fecha.trim() === "" ||
      motivo.trim() === ""
    ) {
      setError(true);
      return;
    }

    //asignar ID
    llamada.id = uuid();

    //crear registro

    crearRegistro(llamada);

    //resetear form
    setLlamada({
      persona: "",
      telefono: "",
      hora: "",
      fecha: "",
      motivo: "",
    });
  };

  return (
    <form>
      <div className="form-group">
        <label>Persona que llamo</label>
        <input
          className="form-control"
          type="text"
          name="persona"
          value={persona}
          onChange={handleLlamada}
        />
      </div>
      <div className="form-group">
        <label>Telefono de contacto</label>
        <input
          className="form-control"
          type="text"
          name="telefono"
          value={telefono}
          onChange={handleLlamada}
        />
      </div>
      <div className="form-group">
        <label>Hora</label>
        <input
          className="form-control"
          type="time"
          name="hora"
          value={hora}
          onChange={handleLlamada}
        />
      </div>
      <div className="form-group">
        <label>Fecha</label>
        <input
          className="form-control"
          type="date"
          name="fecha"
          value={fecha}
          onChange={handleLlamada}
        />
      </div>
      <div className="form-group">
        <label>Motivo de contacto</label>
        <textarea
          className="form-control"
          name="motivo"
          value={motivo}
          onChange={handleLlamada}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleSave}>
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
