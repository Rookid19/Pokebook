
import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
      
        pokemon:[],
        description:{}

    },
    reducers: {
        fetchPokemonData: (state, action) => {
            state.pokemon = action.payload
        },
        fetchPokemonDescription: (state, action) => {
           
            return {
                ...state,
                description: {
                  ...state.description,
                  ...action.payload
                }
              };
        }
    }
})

// Action creators are generated for each case reducer function
export const { fetchPokemonData,fetchPokemonDescription } = pokemonSlice.actions

export const pokemonsData = (state: any) => state.pokemon.pokemon
export const pokemonsDescriptions = (state: any) => state.pokemon.description

export default pokemonSlice.reducer

// Redux Toolkit allows us to write "mutating" logic in reducers. 