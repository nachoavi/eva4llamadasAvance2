import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import DataTable from './DataTable'
import axios from 'axios'
import AddCalls from './AddCalls'

const AgregatteDataTelefonos = ({dataClientes}) => {
    const [dataTelefonos,setDataTelefonos] = useState([])
    const urlTelefonos = "http://45.236.130.191/api-prueba/llamadas.php?action=telefonos"

    

    useEffect(() => {
        const getData = async () => {
            const responseTelefono = await axios.get(urlTelefonos)
            setDataTelefonos(responseTelefono)
            localStorage.setItem('Telefonos',JSON.stringify(responseTelefono.data))

            const storageData = localStorage.getItem('Telefonos')
            if (storageData) {
                setDataTelefonos(JSON.parse(storageData))
            }
        }
        getData()
    },[])

    useEffect(() => {
        localStorage.setItem('Telefonos',JSON.stringify(dataTelefonos))

    }
    ,[dataTelefonos])


    const [formData,setFormData] = useState({
        cliente_id: 0,
        numero: "",
        minutos_plan: 0,
        cliente:{nombre:""}
    })

    const handleInputChange = (ev) => {
        
        setFormData( formData => ({
            ...formData,
            [ev.target.name] : ev.target.value,
            cliente: {
                ...formData.cliente,
                [ev.target.name]: ev.target.value
            }
            
        }))
        
    }

    const submitButton = () => {
        setDataTelefonos((prevList) => [...prevList,formData])
        
    }

    const deleteRegister = (nombre) => {
        const delData = dataTelefonos.filter(data => data.cliente.nombre != nombre && data.numero != nombre)
        setDataTelefonos(delData)
    }

  return (
    <div>
      <div className='container mt-5'>
        <h1>Registrar Plan</h1>
        <div className='mt-5'>
            <label htmlFor="">Seleccionar Cliente</label>
            <select className='form-select' name='nombre' onChange={handleInputChange}>
                {dataClientes.map((data) => (
                    <option>{data.nombre}</option>
                ))}
            </select>
        </div>
        <div>
            <label htmlFor="">Ingresar Numero Telefonico</label>
            <input name='numero' onChange={handleInputChange} class="form-control" type="text" />
        </div>
        <div>
            <label htmlFor="">Ingresar Minutos</label>
            <input name='minutos_plan' onChange={handleInputChange} class="form-control" type="text" />
        </div>
        <div>
            <button className='btn btn-primary mt-4' onClick={submitButton}>Ingresar</button>
        </div>
      </div>
      <DataTable dataLocalStorage={dataTelefonos} dataLocalClientes={dataClientes} deleteRegister={deleteRegister} />
      <AddCalls dataTelefonos={dataTelefonos} dataClientes={dataClientes}/>
    </div>
  )
}

export default AgregatteDataTelefonos
