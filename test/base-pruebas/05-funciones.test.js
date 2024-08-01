import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Prueba de 05', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        //para evaluar lo objetos no usamo el toBe, por el motivo que los objetos se comparar en base a la ubicación en memoria
        expect( testUser ).toEqual( user )
    })

    // validamos el getUsuario
    test('El getUsuario debe de retornar un objeto', () => {
        
        const nombre = 'Camilo'
        const testGetUser = {
            uid: 'ABC567',
            username: nombre
        }

        const getUser = getUsuarioActivo(nombre);

        expect( testGetUser ).toEqual( getUser )
    })
 })