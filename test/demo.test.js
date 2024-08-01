describe('Demo pruebas />', () => {
    test('Esta prueba no debe de falla', () => {

        //La primera prueba
        // if( 1 === 1){
        //     throw new Error('No se puede dividir entre cero')
        // }

        // estructura para realizar las pruebas con jest

        // 1. inicialización
        // 2. Estimulo
        // 3. Observar el comportamiento

        // 1. inicialización
        const message1 = 'Hola mundo  ';
        // 2. Estimulo
        const message2 = message1.trim();
        // 3. Observar el comportamiento
        expect( message1 ).toBe( message2 )

     })
})