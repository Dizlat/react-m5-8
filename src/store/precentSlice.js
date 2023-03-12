import { createSlice } from "@reduxjs/toolkit";
import { decrement, increment } from "./countSlice";
import { getUsers } from "./usersSlice";


const precentSlice = createSlice({
    name: "precentSlice",
    initialState: {
        percent: 0,
    },
    extraReducers: builder => {
        builder.addCase(increment, ( state, action ) => {
            state.percent += 1
        })

        builder.addCase(decrement, state => {
            state.percent -= 1
        })
        builder.addCase(getUsers.fulfilled, state => {
            state.percent = "sucssess"
        })
        builder.addCase(getUsers.rejected, state => {
            state.percent = "error"
        })
    }
})

export default precentSlice.reducer