import { createSlice } from "@reduxjs/toolkit";

export const classSlice = createSlice({
    name:'class',
    initialState:{CurrentClass : ""},
    reducers  : {
        classChangeMethod: (state,action) => {
            state.CurrentClass =  action.payload.CurrentClass;
        }
    }
})

export const {classChangeMethod} = classSlice.actions;

export default classSlice.reducer;