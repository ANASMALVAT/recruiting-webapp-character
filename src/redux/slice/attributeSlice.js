import { createSlice } from "@reduxjs/toolkit";
import { ATTRIBUTE_LIST } from "../../consts";

let initialAttributes = ATTRIBUTE_LIST.map(attr => ({ name: attr, value: 10 }));

export const attributeSlice = createSlice({
  name: 'attribute',
  initialState: initialAttributes, 
  reducers: {
    incrementAttribute: (state, action) => {
      
    },
    decrementAttribute: (state, action) => {
    
    },
    setAttributes: (state, action) => {
      return action.payload; 
    }
  },
});

export const { incrementAttribute, decrementAttribute, setAttributes } = attributeSlice.actions;

export default attributeSlice.reducer;
