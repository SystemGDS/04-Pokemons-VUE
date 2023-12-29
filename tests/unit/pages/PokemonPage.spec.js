import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { pokemons } from "../mocks/pokemons.mocks";
describe('PokemonPage Component', () => {
    let wrapper
    // let mixPokemonArraySpy
    beforeEach(() =>{
        // mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        wrapper = shallowMount( PokemonPage )
    })

    test ('debe de hacer match con el snapshot', () => {
        expect( wrapper.html()).toMatchSnapshot()
    })

    test ('debe llamar mixPokemonArray al montar',() => {
        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        const wrapper = shallowMount( PokemonPage)
        expect (mixPokemonArraySpy).toHaveBeenCalled();
    })

    test('debe de hacer match con el snapshot cuando cargue los pokemons 1', ()=> {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })        
        expect( wrapper.html() ).toMatchSnapshot()
    })
    
    test('debe de montar los componentes de PokemonPicture y PokemonOptions', () => { 
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        
        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')
        //PokemonPicture debe existir
        expect( picture.exists()).toBeTruthy()
        //PokemonOptions debe existir
        expect( options.exists()).toBeTruthy()
        //PokemonPicture 5 attribute pokemonis === '5' 
        expect( picture.attributes('pokemonid')).toBe('5')
        //PokemonOptions attribute pokemon toBe true
        expect( options.attributes('pokemons')).toBeTruthy()

    })

    test('pruebas con checkAnswer', async() => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        
        await wrapper.vm.checkAnswer(5)

        expect( wrapper.find('h2').exists()).toBeTruthy()
        expect( wrapper.vm.showPokemon).toBeTruthy()
        expect( wrapper.find('h2').text()).toBe(`Acertastes ya eres un maestro Pokemon, ${ pokemons[0].name }`)
        expect( wrapper.vm.showPokemon).toBe(true)

        await wrapper.vm.checkAnswer(10)

        expect( wrapper.vm.message).toBe(`Upsss, era ${ pokemons[0].name }`)
    });
});