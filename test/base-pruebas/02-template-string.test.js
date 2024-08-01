import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('02-template-string /> ', () => {
    test('getSaludo debe de retornar "Hola name" ', () => {
        const name = 'Camilo';
        const message = getSaludo(name);

        expect( message ).toBe(`Hola ${name}`);
    })
})