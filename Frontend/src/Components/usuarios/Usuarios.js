import React, {useState, useEffect} from "react";
import Navegador from '../NavBar/NavBar';
import TableUsuarios from './TableUsuarios'
import {actualizarUsuario, agregarUsuario, eliminarUsuario, getListaUsuarios} from './FormUsuarios'
import {useNavigate} from 'react-router-dom';

function Usuarios(){
    const navegar = useNavigate();
    const [usuarioActivo, setUsuarioActivo] = useState(null)

    useEffect(() => {
        setUsuarioActivo(localStorage.getItem("usuarioActivo"));
        if(localStorage.getItem("usuarioActivo") === null)
        navegar("/login")
    },[navegar, usuarioActivo])

    const [usuarios, stUsuarios] = useState([]);
    const [usuario, setUsuario] = useState(null);
    const [mostrarLista, setMostrarLista] = useState(true);

    const listar = () => {
        getListaUsuarios().then((data) => {setUsuarios(data)}).catch((err) => {console.log(err)})
    }

    if(usuarios.length === 0)
        listar();

    const verLista = (e) => {
        if(mostrarLista){
            setMostrarLista(false);
        }
        else{
            setMostrarLista(true);
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
                epsMesero: "",
                pensionMesero: ""

            })
        }
    }

    const guardar = (usuario) => {
        if(usuario._id === null){
            agregarUsuario(usuario).then((data) => {listar()}).catch((err) => {console.log(err)})
        }
        else{
            actualizarUsuario(usuario).then((data) => listar()).catch((err) => {console.log(err)})
        }
        setMostrarLista(true);
    }

    const eliminar = (id) => {
        eliminarUsuario(id).then((data) => {
            if(data.deletedCount === 1)
                listar();
        }).catch((err) => {console.log(err)})
    }

    const ver = (usuario)=>{
        setUsuario(usuario);
        setMostrarLista(false);
    }

    return (
        <div>
            <Navegador/>
            {!mostrarLista && <button className="btn btn-secondary" onClick={verLista}>ver lista</button>}
            {mostrarLista && <button className="btn btn-secondary" onClick={verLista}>crear usuario</button>}
            {!mostrarLista && <div>
                <FormUsuarios onSave = {guardar} setUsuario={usuario}/>
                </div>}
            {mostrarLista && <TableUsuarios usuarios= {usuarios} onDelete={eliminar} inView={ver}/>}
        </div>
    )
}

export default Usuarios