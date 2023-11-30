import React from "react";
function TablaPlatos(props) {
    const {platos, onDelete, onView}=props;
  return (
    <>
    <table className='table table-striped'>
      <thead className='table-primary'>
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Observación</th>
            <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {platos.map((plato)=>{
            return(<tr key={plato._id}>
                <td>{plato._id}</td>
                <td>{plato.nombrePlato}</td>
                <td>{plato.precioPlato}</td>
                <td>{plato.observacionPlato}</td>
                <td>
                    <button className='btn btn-primary btn-sm m-4' onClick={()=>(onView(plato))}>Actualizar</button>
                    <button className='btn btn-danger btn-sm m-4' onClick={()=>{onDelete(plato._id)}}>Eliminar</button>
                </td>
            </tr>)
        })}
      </tbody>
    </table>
    </>
  )
}

export default TablaPlatos
