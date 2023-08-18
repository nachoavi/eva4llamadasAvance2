import React from 'react'



const DataTable = ({dataLocalStorage,deleteRegister}) => {


  return (
    <div className='mt-5'>
        <table className='container table'>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Numero</td>
                    <td>Minutos disponibles</td>
                    <td>Acción</td>
                </tr>
            </thead>
            <tbody id='tbody'>
            
            {
            dataLocalStorage.map((data) => (
                <tr>
                    <td>{data.cliente.nombre}</td>
                    <td>{data.numero}</td>
                    <td>{data.minutos_plan} </td>
                    <td><button className='btn btn-danger' onClick={() => deleteRegister(data.cliente.nombre && data.numero) } >Eliminar</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default DataTable
