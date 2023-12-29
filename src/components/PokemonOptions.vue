<template>
    <div class="options-container">
      <ul>
        <li v-for="pokemon in pokemons"
          :key="pokemon.id"
          @click="$emit( 'selection', pokemon.id)">
        {{ pokemon.name }}
        </li>
        
      </ul>
    </div>
</template>
  
  <script>
  export default {
    props: {
      pokemons:{
        type: Array,
        required: true
      }
    },
    methods: {

    }
  
  }
  </script>
  
  <style scoped>
    /* Pokemon Options */
ul {
    /* display: flex; */
    list-style-type: none;
    align-items: center;
    justify-content: center;    
    padding: auto;
}
li {
    background-color: white;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 200px;
    height: 30px;
    text-justify: center;
    color: #057009d3;
    /* position: relative;     */

    text-decoration: none;
    text-transform: uppercase;
    /* text-align: center; */
            
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
  </style>