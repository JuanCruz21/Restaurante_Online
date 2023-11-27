import { useState,useEffect } from "react"
import {getListaPlatos, agregarPlatos,actualizarPlatos,eliminarPlato} from "../../API/Platos"
import TablaPlatos from "./TablaPlatos";
import FormPlatos from "./FormPlatos";
function Platos() {
  
  const [platos, setPlatos] = useState([])
  const [plato , setPlato] = useState(null)
  const [mostrarlista , setmostrarLista] = useState(true)
  
  const listar = () => {
    getListaPlatos().then((data) => {setPlato(data)}).catch((err)=> {console.log(err)})
  }

  if(platos.length == 0)
    listar()  
    const verLista = (e) => {
      if (mostrarlista){
        setmostrarLista(false)
      }
      else{
        setmostrarLista(true)
        setPlato({
          _id: null,
          nombrePlato: "",
          precioPlato: "",
          observacionPlato: ""
        })
      }
    }
    const guardar = (plato) => {
      if(plato._id=== null){
        agregarPlatos(plato).then((data)=> {listar()}).catch((err)=>{console.log(err)})
      }else{
        actualizarPlatos(plato).then((data)=> {listar()}).catch((err)=>{console.log(err)})
      }
      setmostrarLista(true)
    }
    
    const Eliminar = (id) => {
      eliminarPlato(id).then((data)=>{
        if(data.deleteCount === 1)
          listar()
      }).catch((err)=>{console.log(err)})
    }

    const ver = (plato) => {
      setPlato(plato)
      setmostrarLista(false)
    }

  return (
    <>
      {!mostrarlista && <button className="btn btn-secondary m-4" onClick={verLista}>Ver Lista de Platos</button>}
      {mostrarlista && <button className="btn btn-primary m-4" onClick={verLista}>Crear Plato</button>}
      {!mostrarlista && <div>
        <FormPlatos onSave={guardar} setPlatos={plato}/>
        </div>
        }
      {mostrarlista && <TablaPlatos platos={platos} onDelete={Eliminar} onView={verLista}/>}
    </>
  )
}

export default Platos