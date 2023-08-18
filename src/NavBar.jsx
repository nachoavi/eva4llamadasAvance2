import React from 'react'




const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">TrueCaller</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href='./AgreggateDataClientes'>Inicio</a>
                        <a class="nav-link active" href="./AgreggateDataClientes">Ingresar cliente</a>
                        <a class="nav-link active" >Añadir llamada</a>
                    </div>
                </div>
            </div>
        </nav> 
    </div>
  )
}

export default NavBar

