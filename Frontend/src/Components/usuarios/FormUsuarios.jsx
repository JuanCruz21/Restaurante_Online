import { useEffect, useState } from "react";


const FormUsuarios = (props) => {
    const {Usuarios,onSave} = props;

    const [usuario,setUsuario] = useState({
        _id: null,
        nombreCliente: "",
        apellidoCliente: "",
        tipoIdentificacion: "",
        identicacion: "",
        direccionCliente: "",
        telefonoCliente: "",
        emailCliente: "",
        claveCliente: "",
        epsMesero : "",
        pensionMesero : ""
    })

    const limpiar = ()=>{
        setUsuario({
          _id: null,
          nombreCliente: "",
          apellidoCliente: "",
          tipoIdentificacion: "",
          identicacion: "",
          direccionCliente: "",
          telefonoCliente: "",
          emailCliente: "",
          claveCliente: "",
          epsMesero : "",
          pensionMesero : ""
        })
    }

    const handleChange = (event) => {
      setUsuario({
          ...usuario,
          [event.target.name]: event.target.value
      });
  };

  useEffect(() => {
    setUsuario(Usuarios);
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
                <input type="text" name="apellidoCliente" className="form-control" value={usuario.apellidoCliente} onChange={handleChange}/>
            </div>
            <div className="col">
                <label className="form-label">Tipo de identificiación</label>
                <input type="text" name="tipoIdentificacion" className="form-control" value={usuario.tipoIdentificacion} onChange={handleChange}/>
            </div>
            <div className="col">
                <label className="form-label">Número de identificación</label>
                <input type="number" name="identificacion" className="form-control" value={usuario.identicacion} onChange={handleChange}/>
            </div>
            <div className="col">
                <label className="form-label">Dirección</label>
                <input type="text" name="direccionCliente" className="form-control" value={usuario.direccionCliente} onChange={handleChange}/>
            </div>
            <div className="col">
                <label className="form-label">telefono</label>
                <input type="text" name="telefonoCliente" className="form-control" value={usuario.telefonoCliente} onChange={handleChange}/>
            </div>
            <div className="col">
                <label className="form-label">email</label>
                <input type="text" name="emailCliente" className="form-control" value={usuario.emailCliente} onChange={handleChange}/>
            </div>
            <div className="col">
                <label className="form-label">Clave</label>
                <input type="text" name="ClaveCliente" className="form-control" value={usuario.claveCliente} onChange={handleChange}/>
            </div>
            <div className="col">
                <label className="form-label">eps</label>
                <input type="text" name="epsMesero" className="form-control" value={usuario.epsMesero} onChange={handleChange}/>
            </div>
            <div className="col">
                <label className="form-label">Pensión</label>
                <input type="text" name="pensionMesero" className="form-control" value={usuario.pensionMesero} onChange={handleChange}/>
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