
function NavVar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid"><a className="navbar-brand" href="/">Restaurante Online</a><div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  me-2">
                            <li className="nav-item"><a className   ="nav-link" href="/">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Contacto">Contacto</a></li>
                            <a className="btn btn-primary me-2" type="button" href="/Login">Login</a>   
                            <a className="btn btn-secondary me-2" type="button" href="/Register">Sign Up</a>   
                        </ul>
                    </div>
                </div>
                </nav>
        </>
    )
}
export default NavVar