import React from 'react';
import ReactDOM from 'react-dom/client';
import AgregatteDataClientes from './AgreggateDataClientes';
import AddCalls from './AddCalls';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <AgregatteDataClientes/>
  </>
);
//TODO: Pasar los datos de la API al localstorage y trabajar desde ahi, pasar los datos del formulario  AddCalls a DataTable