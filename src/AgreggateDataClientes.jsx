import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import DataTable from './DataTable'
import axios from 'axios'
import AgregatteDataTelefonos from './AgregatteDataTelefonos'

const AgregatteDataClientes = () => {
    const [dataClientes,setDataClientes] = useState([])
    const urlClientes = 'http://45.236.130.191/api-prueba/llamadas.php?action=clientes'

    

    useEffect(() => {
        const getData = async () => {
            const responseClientes = await axios.get(urlClientes)
            setDataClientes(responseClientes)
            localStorage.setItem('Clientes',JSON.stringify(responseClientes.data))

            const storageDataCli = localStorage.getItem('Clientes')
            if (storageDataCli) {
                setDataClientes(JSON.parse(storageDataCli))
            }

        }
        getData()
    },[])

    useEffect(() => {
        localStorage.setItem('Telefonos',JSON.stringify(dataClientes))

    }
    ,[dataClientes])


    const [formData,setFormData] = useState({
        id: 0,
        nombre: ''
        
        
    })

    const handleInputChange = (ev) => {
        
        setFormData( formData => ({
            ...formData,
            [ev.target.name] : ev.target.value,
        }))
        
    }

    const submitButton = () => {
        setDataClientes((prevList) => [...prevList,formData])
        
    }

    const deleteRegister = (id) => {
        const delData = dataClientes.filter(data => data.id != id)
        setDataClientes(delData)
    }

  return (
    <div>
      <NavBar/>
      <div className='container mt-5'>
        <h1>Registrar Cliente</h1>
        <div className='mt-5'>
            <label htmlFor="">Ingresar Nombre Comleto</label>
            <input name='nombre' onChange={handleInputChange} class="form-control" type="text" />
        </div>
        <div>
            <button className='btn btn-primary mt-4' onClick={submitButton}>Ingresar</button>
        </div>
      </div>
      <div className='container mt-5'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {dataClientes.map((data) => (
                    <tr>
                        <td>{data.nombre}</td>
                        <td><button className='btn btn-danger' onClick={() => deleteRegister(data.id)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
      <AgregatteDataTelefonos dataClientes={dataClientes} />
    </div>
  )
}

export default AgregatteDataClientes