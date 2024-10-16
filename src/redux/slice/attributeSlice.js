// attributeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { ATTRIBUTE_LIST } from "../../consts";

// Check if ATTRIBUTE_LIST is defined and is an array
const initialAttributes = Array.isArray(ATTRIBUTE_LIST) 
  ? ATTRIBUTE_LIST.map(attr => ({ name: attr, value: 0 })) 
  : []; 

export const attributeSlice = createSlice({
  name: 'attribute',
  initialState: initialAttributes, 
  reducers: {
    incrementAttribute: (state, action) => {
      const attribute = state.find(attr => attr.name === action.payload.name);
      if (attribute) {
        attribute.value += 1;
      }
    },
    decrementAttribute: (state, action) => {
      const attribute = state.find(attr => attr.name === action.payload.name);
      if (attribute && attribute.value > 0) {
        attribute.value -= 1;
      }
    },
    setAttributes: (state, action) => {
      return action.payload; // Replace state with new attributes
    }
  },
});

export const { incrementAttribute, decrementAttribute, setAttributes } = attributeSlice.actions;

export default attributeSlice.reducer;
