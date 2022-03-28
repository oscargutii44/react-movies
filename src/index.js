import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

// constante que después se renderiza

// const contenido = (
//   <div>
//     <h1>Titulo</h1>
//     <div>lpmmm</div>
//   </div>
// );

//Podemos pasarle parámetros al componente desde la función de renderizado - linea 27

// function Componente({ children }) {
//   return (
//     <div>
//       <h1>titulo</h1>
//       <div>{children}</div>
//     </div>
//   );
// }

//Función que renderiza hacia el html principal
ReactDOM.render(<App />, document.getElementById('root'));
