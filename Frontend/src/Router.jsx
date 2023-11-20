import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Platos from "./Components/Platos/Platos";
import Usuarios from "./Components/usuarios/Usuarios";

function Router(){
 return(
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/Platos" element={<Platos/>}></Route>
            <Route path="/Usuarios" element={<Usuarios/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
 )
}

export default Router;