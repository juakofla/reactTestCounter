import PropTypes from 'prop-types';

//Si sabemos que no va a cambiar el valor, entonces es recomendable ponermos fuera de la funcion, por el motivo que no se va a reprocesar cuando el componente sea llamada
const name = 'Juan Camilo Peñaranda Mosquera';
const obj  = {
    name    : 'Juan Camilo',
    lastName: 'Peñaranda Mosquera',
    age     : 10
}

const age = (number) => {

    return (number >= 1 && number <= 20)?"Estas Joven": "Estas viejo"
}

export const FirstApp = ({title, intentos, lastName}) => {
 
    console.log(lastName)
    

    return (
        <>
            <h1>{title + ' Número de intentos '+ intentos}</h1>
            <h1>{ obj.lastName }</h1>
            <h3>{ age(10) }</h3>
            <code>
                {/* Nos sirve para mostrar nuestro objecto como json */}
                {JSON.stringify( obj)}
            </code>
        </>
    )
}


FirstApp.propTypes ={
    title: PropTypes.string.isRequired, 
    intentos: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay ningún titulo', 
    lastName: 'No hay ningún apellido'
}