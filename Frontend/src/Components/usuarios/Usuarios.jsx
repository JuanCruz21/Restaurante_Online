import { useState,useEffect } from "react"
import {getListaUsuarios, agregarUsuarios,actualizarUsuarios,eliminarUsuarios} from "../../API/Usuarios"
import TableUsuarios from "./TableUsuarios";
import FormUsuarios from "./FormUsuarios";
function Usuarios() {
  
  const [usuarios, setUsuarios] = useState([])
  const [usuario , setUsuario] = useState({})
  const [mostrarlista , setmostrarLista] = useState(true)
  
  const listar = () => {
    getListaUsuarios().then((data) => {setUsuarios(data)}).catch((err)=> {console.log(err)})
  }

  if(usuarios.length == 0)
    listar()  
    const verLista = () => {
      if (mostrarlista){
        setmostrarLista(false)
      }
      else{
        setmostrarLista(true)
        setUsuario({
          _id: null,
          nombreCliente: "",
          apellidoCliente: "",
          tipoIdentificacion: "",
          identificacion: "",
          direccionCliente: "",
          telefonoCliente: "",
          emailCliente: "",
          claveCliente: "",
          epsMesero : "",
          pensionMesero : ""
        })
      }
    }

    const guardar = (usuario) => {
      console.log(usuario._id)
      if(usuario._id === undefined){
        agregarUsuarios(usuario).then((data)=> {listar()}).catch((err)=>{console.log(err)})
      }else{
        actualizarUsuarios(usuario).then((data)=> {listar()}).catch((err)=>{console.log(err)})
      }
      setmostrarLista(true)
    }
    
    const Eliminar = (id) => {
        eliminarUsuarios(id).then((data)=>{
        if(data.deleteCount === 1)
          listar()
      }).catch((err)=>{console.log(err)})
    }

    const ver = (usuario) => {
      setUsuario(usuario)
      setmostrarLista(false)
    }

  return (
    <>
      {!mostrarlista && <button className="btn btn-primary m-4" onClick={verLista}>Ver Lista de usuarios</button>}
      {mostrarlista && <button className="btn btn-primary m-4" onClick={verLista}>Crear usuario</button>}
      {!mostrarlista && <div>
        <FormUsuarios onSave={guardar} Usuarios={usuario}/>
        </div>
        }
      {mostrarlista && <TableUsuarios usuarios={usuarios} onDelete={Eliminar} onView={ver}/>}
    </>
  )
}

export default Usuarios