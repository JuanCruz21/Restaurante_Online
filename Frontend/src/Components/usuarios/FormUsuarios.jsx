import { useEffect, useState } from "react";


const FormUsuarios = (props) => {
    const {Usuarios,onSave} = props;

    const [usuario,setusuario] = useState({
        _id: null,
        nombreCliente: "",
        apellidoCliente: "",
        tipoIdentificacion: ""
    })

    const limpiar = ()=>{
        setusuario({
            _id: null,
            nombreCliente: "",
            apellidoCliente: "",
            tipoIdentificacion: ""
        })
    }

    const handleChange = (event) => {
      setusuario({
          ...usuario,
          [event.target.name]: event.target.value
      });
  };

  useEffect(() => {
    setusuario(Usuarios);
  }, [Usuarios]);


    if(usuario === null){
        limpiar()
    }

    const onClickGuardar = (e) => {
     e.preventDefault();
     onSave(usuario)
     limpiar()   
    }

  return (
    <>
      <form>
        <div className="row">
            <div className="col">
                <label className="form-label">Nombre usuario</label>
                <input type="text" name="nombreCliente" className="form-control" value={usuario.nombreCliente} onChange={handleChange}/>
            </div>
            <div className="col">
                <label className="form-label">Apellido usuario</label>
                <input type="number" name="apellidoCliente" className="form-control" value={usuario.apellidoCliente} onChange={handleChange}/>
            </div>
            <div className="col">
                <label className="form-label">Observaciones</label>
                <input type="text" name="tipoIdentificacion" className="form-control" value={usuario.tipoIdentificacion} onChange={handleChange}/>
            </div>
        </div>
      </form>
      <div>
        <button className="btn btn-primary" onClick={onClickGuardar}>Guardar</button>
        <button className="btn btn-warning" onClick={limpiar}>Limpiar</button>
      </div>
    </>
  )
}

export default FormUsuarios