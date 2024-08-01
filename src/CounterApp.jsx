import PropType from 'prop-types'
import { useState } from 'react';

export const CounterApp = ({ value }) => {

    const [number, setNumber] = useState(value)

    const printNumer = () => {
        setNumber( number + 1)
        console.log(number)
    }

    const resta = () => {
        setNumber(number - 1)
    }

    const reset = () => {
        setNumber(value)
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ number }</h2>
            <button onClick={ resta }> -1 </button>
            <button onClick={ reset }> Reset </button>
            <button onClick={ printNumer }> +1 </button>
        </>
    )
}


CounterApp.prototype = {
    value: PropType.number.isRequired
}