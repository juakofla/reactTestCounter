
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Camilo'
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );