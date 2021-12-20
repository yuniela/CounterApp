// Es parte del estandar que los componentes 
// se escriban en capitalize 

// pueden ser de funciones o clases 

// functionals components con hooks

import React from 'react';

import propTypes from 'prop-types';


const PrimeraApp = ( { saludo, subtitulo } ) => {

    // imprimir variables

    //const saludo = saludo;

    const datos = {
        nombre: 'Fernando',
        edad: 34
    }

    return (
        //para colocar mas cosas

        <>          
            <h1>{ saludo }</h1>
            <pre>{JSON.stringify(datos,null,3)}</pre>
            <p>{ subtitulo }</p>
        </>
        
    );

}


PrimeraApp.propTypes = {
    saludo: propTypes.string.isRequired

}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;