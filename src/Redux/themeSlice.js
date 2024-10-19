import { createSlice } from '@reduxjs/toolkit'

const initialState = { mode: localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : false }

const themeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        handleTheme(state) {
            state.mode = !state.mode;
            localStorage.setItem('theme', JSON.stringify(state.mode))
        },
    },
})

export const { handleTheme } = themeSlice.actions;
export default themeSlice.reducer;