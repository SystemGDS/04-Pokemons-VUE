import getPokemonOptions, { getPokemons, getPokemonsNames } from '@/helpers/getPokemonOptions'

describe('getPokemons Helpers',()=>{
    test('Debe regresar un Arreglo de Numeros', () => {
        const pokemon = getPokemons()
        expect(pokemon.length).toBe(650)
        expect(pokemon[0]).toBe(1)
        expect(pokemon[500]).toBe(501)
        expect(pokemon[649]).toBe(650)
    })

    test('debe retornar un arreglo de 4 elementos con nombres de pokemons', async() => {
        const pokemons = await getPokemonsNames([1,2,3,4])
        // console.log(pokemons)
        expect( pokemons).toStrictEqual([
            {name:'bulbasaur', id: 1},
            {name:'ivysaur', id: 2},
            {name:'venusaur', id: 3},
            {name:'charmander', id: 4}
        ])
    })

    test('Debe retornar un arreglo de 4 elementos con nombres Mezclados de Pokemons', async() =>{
        const pokemons = await getPokemonOptions()
        // console.log(pokemons)
        expect(pokemons.length).toBe(4)
        expect( pokemons).toEqual([
            {
                name:expect.any(String), 
                id: expect.any(Number),
            },
            {
                name:expect.any(String), 
                id: expect.any(Number),
            },
            {
                name:expect.any(String), 
                id: expect.any(Number),
            },
            {
                name:expect.any(String), 
                id: expect.any(Number),
            }
        ])
    })
})
