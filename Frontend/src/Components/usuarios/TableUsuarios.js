import React from 'react'
import usuario from './Usuarios'

function TableUsuarios(props) {
    const {usuarios, onDelete, onView} = props;
  return (
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>TipoId</th>
                <th>Id</th>
                <th>Dirección</th>
                <th>Telefono</th>
                <th>email</th>
                <th>Clave</th>
                
            </tr>
        </thead>
        <tbody>
            {usuarios.map((usuario) => {
                return(<tr key={usuario._id}>
                    <td>{usuario.nombreCliente}</td>
                    <td>{usuario.apellidoCliente}</td>
                    <td>{usuario.tipoIdentificacion}</td>
                    <td>{usuario.identificacion}</td>
                    <td>{usuario.direccionCliente}</td>
                    <td>{usuario.telefonoCliente}</td>
                    <td>{usuario.emailCliente}</td>
                    <td>{usuario.claveCliente}</td>
                    <td>
                        <button onClick={()=>{onDelete(usuario._id)}}>Eliminar</button>
                        <button onClick={()=>{onView(usuario)}}>Ver</button>
                    </td>
                </tr>)
            })}
        </tbody>

    </table>
  )
}

export default TableUsuarios