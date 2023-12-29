import pokemonApi from "@/api/pokemonApi"

describe('pokemonApi',()=>{
    test('Axios debe estar configurado correctamente', () => {
        expect( pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')
    })
})