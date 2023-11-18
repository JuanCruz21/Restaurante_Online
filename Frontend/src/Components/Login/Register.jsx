import "../../Styles/Usuarios/Usuarios.css"
function Register(){
    return(
        <>
        <form className="formu contenedor">
        <p className="title">Register </p>
        <p className="message">Hazte miembro del mejor servicio. </p>
            <div className="flex">
            <label>
                <input required="" placeholder="" type="text" className="input"/>
                <span>Nombres</span>
            </label>

            <label>
                <input required="" placeholder="" type="text" className="input"/>
                <span>Apellidos</span>
            </label>
        </div>  
                
        <label>
            <input required="" placeholder="" type="email" className="input"/>
            <span>Correo</span>
        </label> 
            
        <label>
            <input required="" placeholder="" type="password" className="input"/>
            <span>Contraseña</span>
        </label>
        <label>
            <input required="" placeholder="" type="password" className="input"/>
            <span>Confirmar contraseña</span>
        </label>
        <button className="submit">Guardar</button>
        <p className="signin">Ya tienes cuenta ? <a href="/Login">Ingresa aquí</a> </p>
    </form>
</>
)
}
export default Register