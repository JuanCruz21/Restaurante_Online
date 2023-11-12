import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import NavVar from "./NavBar/NavBar";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavVar/>
    {<Router/>}
  </React.StrictMode>,
)
