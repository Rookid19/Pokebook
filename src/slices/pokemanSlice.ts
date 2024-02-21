
import { createSlice } from '@reduxjs/toolkit'

export const pokemanSlice = createSlice({
    name: 'pokeman',
    initialState: {
        notes: [],
    },
    reducers: {
        fetchPokemanData: (state, action) => {
            state.notes = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { fetchPokemanData } = pokemanSlice.actions

export const notesData = (state: any) => state.pokeman.pokeman

export default pokemanSlice.reducer

// Redux Toolkit allows us to write "mutating" logic in reducers. 