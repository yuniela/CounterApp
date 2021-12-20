import React from "react"

// para renderizar
import ReactDom from "react-dom";

// importar componente

import PrimeraApp from "./PrimeraApp";

import CounterApp from "./CounterApp";

// IMPORTAR CSS
import './index.css';

// especifico el elemento donde debo renderizar
// necesito la referencia al elemento
 
const divRoot = document.querySelector('#root');

//mostrar en pantalla
// lo q quiero poner y en donde lo quiero poner
ReactDom.render(<CounterApp value={10}/>,divRoot);

// ReactDom permite crear arbol de componentes
// y comunicarse de manera sencilla con los elementos

