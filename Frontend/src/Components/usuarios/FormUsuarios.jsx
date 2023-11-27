import React from 'react'

function FormUsuarios() {
    
    const handleChange = (e)=>{
        
    const [verEspecialidad, setverEspecialidad] = useState(false);
        setPlato({
            ...plato, [e.target.name]: e.target.value
        })
        console.log(e.target.value)
        if(e.target.name === "rol"){
            setverEspecialidad(true)
        }else{
            setverEspecialidad(false)
        }
        getPlatos(plato)
    }
  return (
    <div>
      
    </div>
  )
}

export default FormUsuarios
