import React from 'react'


const SelectClientes = ({dataCliente,setIdCliente,handleInput}) => {

  const getIdCliente = () => {
    setIdCliente(document.getElementById('cliente').value)
    
  }

  return (
    <div>
        
        <label>Clientes</label>
        <select className='form-select' name='cliente' id='cliente' onChange={getIdCliente} onBlur={handleInput}>
          {dataCliente.map((cli) => (
            <option key={cli.id} value={cli.id} >{cli.nombre}</option>
          ))}                
        </select>
      
        
    </div>
  )
}

export default SelectClientes
