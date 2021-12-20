import React, {useState} from 'react';

import propTypes from 'prop-types';

const CounterApp = ({ value = 10}) => {

    //uso de hooks
    const [ counter, setCounter ] = useState(value);
    
    
    //handleAdd funcion para manejar eventos
    const handleAdd = () => {
        setCounter( counter + 1 );
    }
 
    const handleReset = () => {
        setCounter ( value )
    }

    const handleLess = () => {
        setCounter ( counter - 1 )
    }


    return (

        <>
            <h1> CounterApp </h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleLess }>-1</button>
        </>
        
    );

}

CounterApp.propTypes = {
    value: propTypes.number
}

export  default CounterApp;