
import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemon: [],
    },
    reducers: {
        fetchPokemonData: (state, action) => {
            state.pokemon = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { fetchPokemonData } = pokemonSlice.actions

export const pokemonsData = (state: any) => state.pokemon.pokemon

export default pokemonSlice.reducer

// Redux Toolkit allows us to write "mutating" logic in reducers. 