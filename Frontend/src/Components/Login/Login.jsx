import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login =() => {
    const navegar = useNavigate()
 const [email,setEmail] = useState('');
 const [usuario,setUsuario] = useState({
    _id: null,
    usuario: "",
 });
 return(
    <>
    <form className="formu contenedor">
        <p className="title">Login </p>
        <p className="message">Ingresa ahora a la app. </p>  
                
        <label>
            <input required="" placeholder="" type="email" className="input" />
            <span>Correo</span>
        </label> 
            
        <label>
            <input required="" placeholder="" type="password"  className="input"/>
            <span>Contraseña</span>
        </label>
        <button className="submit">Ingresar</button>
        <p className="signin">No tienes cuenta ? <a href="/Register">Registrate</a> </p>
    </form>
    </>
 )
};
export default Login;