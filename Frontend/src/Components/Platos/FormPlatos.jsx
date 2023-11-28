import React,{ useEffect, useState } from "react";


const FormPlatos = (props) => {
    const {Platos,onSave} = props;
    const [plato,setPlato] = useState({
        _id: null,
        nombrePlato: "",
        precioPlato: "",
        observacionPlato: ""
    })

    const limpiar = ()=>{
        setPlato({
            _id: null,
            nombrePlato: "",
            precioPlato: "",
            observacionPlato: ""
        })
    }

    const handleChange = (event) => {
      setPlato({
          ...plato,
          [event.target.name]: event.target.value
      });
  };

  useEffect(() => {
    setPlato(Platos);
}, [Platos]);


    if(plato == null){
        limpiar()
    }

    const onClickGuardar = (e) => {
     e.preventDefault();
     onSave()
     limpiar()   
    }

  return (
    <>
      <form>
        <div className="row">
            <div className="col">
                <label className="form-label">Nombre Plato</label>
                <input type="text" name="nombrePlato" className="form-control" value={plato.nombrePlato} onChange={handleChange}/>
            </div>
            <div className="col">
                <label className="form-label">Precio Plato</label>
                <input type="number" name="precioPlato" className="form-control" value={plato.precioPlato} onChange={handleChange}/>
            </div>
            <div className="col">
                <label className="form-label">Observaciones</label>
                <input type="text" name="observacionPlato" className="form-control" value={plato.observacionPlato} onChange={handleChange}/>
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

export default FormPlatos