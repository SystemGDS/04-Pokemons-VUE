<template>
    <h1 v-if="!pokemon">Espere por Favor....</h1>
    <div v-else>
        <h1>¿Quien es este Pokemon?</h1>
        <!-- TODO: Img -->
        <PokemonPicture 
            :pokemonId="pokemon.id" 
            :showPokemon="showPokemon" />
        <!-- TODO: Opciones -->
        <PokemonOptions 
            :pokemons="pokemonArr"
            @selection="checkAnswer"
        />

        <template v-if="showAnswer" >
            <h2 class="fade-in">
                {{ message}} </h2>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </template>
    </div>
    
</template>

<script>

import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions'; 

import getPokemonOptions from '@/helpers/getPokemonOptions'

// console.log(getPokemonOptions ())

export default {
    
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data(){
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions ()
            // console.log(this.pokemonArr);
            const rndInt = Math.floor(Math.random() * 4 )
            this.pokemon = this.pokemonArr[rndInt]
        },

        checkAnswer( selectedId ){
            // console.log("Pokemon Page Cambios")
            this.showPokemon = true
            this.showAnswer = true

            if( selectedId === this.pokemon.id) {
                this.message = `Acertastes ya eres un maestro Pokemon, ${ this.pokemon.name }`
            } else {
                this.message = `Upsss, era ${ this.pokemon.name }`
            }
        },
        newGame(){
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
    mounted(){
        this.mixPokemonArray()
    }
}
</script>
<style>
    button {
        background-color: green;       
        width: 30%;
        height: 40px;
        font-weight: bold;
        border-radius: 10px;
        color: white;
        text-transform: uppercase;       

    }

    button:hover {
        background-color: rgba(1, 125, 94, 0.522);
        color: red
    }
</style>