import React from 'react'

const SelectTelefonos = ({dataTelefono,idCliente,handleInput}) => {

    const telefonos = dataTelefono.filter((tel) => tel.cliente_id == idCliente)

  return (

    <div>
        
        <label>Teléfono</label>
        <select className='form-select' name='telefono' onChange={handleInput}>
            {telefonos.map((tel) => (
                <option key={tel.id} value={tel.id}>{tel.numero}</option>
            ))}     
        </select>
        
    </div>
  )
}

export default SelectTelefonos
