import { createSlice } from "@reduxjs/toolkit";



const countSlice = createSlice({
    name: "countSlice",
    initialState: {
        count: 0
    },
    reducers: {
        increment: ( state ) => {
            state.count += 1
        },
        decrement: ( state ) => {
            state.count -= 1
        },
    }
})

export const { decrement, increment } = countSlice.actions
export default countSlice.reducer