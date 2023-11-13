
function Login(){
 return(
    <>
    <form className="formu contenedor">
        <p className="title">Login </p>
        <p className="message">Ingresa ahora a la app. </p>  
                
        <label>
            <input required="" placeholder="" type="email" className="input"/>
            <span>Correo</span>
        </label> 
            
        <label>
            <input required="" placeholder="" type="password" className="input"/>
            <span>Contraseña</span>
        </label>
        <button className="submit">Ingresar</button>
        <p className="signin">No tienes cuenta ? <a href="/Register">Registrate</a> </p>
    </form>
    </>
 )
}
export default Login;