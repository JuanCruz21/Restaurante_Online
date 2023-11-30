import React, { useEffect } from "react";
function TableUsuarios(props) {
    const {usuarios, onDelete, onView}=props;
  return (
    <>
    <table className='table table-striped'>
      <thead className='table-primary'>
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>tipoIdentificacion</th>
            <th>identificación</th>
            <th>emailCliente</th>
            <th>direccionCliente</th>
            <th>claveCliente</th>
            <th>epsMesero</th>
            <th>pensionMesero</th>
            <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario)=>{
            return(<tr key={usuario._id}>
                <td>{usuario._id}</td>
                <td>{usuario.nombreCliente}</td>
                <td>{usuario.apellidoCliente}</td>
                <td>{usuario.tipoIdentificacion}</td>
                <td>{usuario.identificacion}</td>
                <td>{usuario.emailCliente}</td>
                <td>{usuario.direccionCliente}</td>
                <td>{usuario.claveCliente}</td>
                
                <td>{usuario.epsMesero}</td>
                <td>{usuario.pensionMesero}</td>
                <td>
                    <button className='btn btn-primary btn-sm m-4' onClick={()=>(onView(usuario))}>Actualizar</button>
                    <button className='btn btn-danger btn-sm m-4' onClick={()=>{onDelete(usuario._id)}}>Eliminar</button>
                </td>
            </tr>)
        })}
      </tbody>
    </table>
    </>
  )
}

export default TableUsuarios
