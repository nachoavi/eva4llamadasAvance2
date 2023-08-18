import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import SelectClientes from './SelectClientes'
import SelectTelefonos from './SelectTelefonos'
import axios from 'axios'

const AddCalls = ({dataTelefonos,dataClientes}) => {
    
    const [idCliente,setIdCliente] = useState(2)


    const [formData,setFormData] = useState({
        cliente:'',
        telefono:'',
        minutosUtilizados:''
    })


    const handleInputChange = (ev) => {
        setFormData( formData => ({
            ...formData,
            [ev.target.name] : ev.target.value,
        }))
        
    }

  return (
    <div>
        <NavBar/>
        <div className='container mt-5'>
            <SelectClientes dataCliente={dataClientes} setIdCliente={setIdCliente} handleInput={handleInputChange}/>
            <SelectTelefonos dataTelefono={dataTelefonos} idCliente={idCliente} handleInput={handleInputChange} />
            <form action="">
                <div>
                    <label>Minutos Utilizados</label>
                    <input type="number" class="form-control" name='minutosUtilizados' onChange={handleInputChange} aria-label="Username" aria-describedby="addon-wrapping"/>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button className='btn btn-primary mt-4'>Añadir</button>
                </div>
            </form>
        </div>
        <div>
        <h1>Llamadas Realizadas</h1>
        <div className='container mt-5 mb-5'>
            <select className='form-select '>
                <option>Seleccionar cliente</option>
            </select>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Numero</td>
                    <td className='table-success'>Minutos disponibles</td>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
    </div>
  )
}

export default AddCalls
