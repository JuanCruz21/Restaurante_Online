import {useState} from "react";
const Login =() => {
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');
setEmail()
setPassword()
 return(
    <>
    <form className="formu contenedor">
        <p className="title">Login </p>
        <p className="message">Ingresa ahora a la app. </p>  
                
        <label>
            <input required="" placeholder="" type="email" className="input" value={email}/>
            <span>Correo</span>
        </label> 
            
        <label>
            <input required="" placeholder="" type="password" value={password} className="input"/>
            <span>Contraseña</span>
        </label>
        <button className="submit">Ingresar</button>
        <p className="signin">No tienes cuenta ? <a href="/Register">Registrate</a> </p>
    </form>
    </>
 )
};
export default Login;