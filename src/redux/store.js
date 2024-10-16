import {configureStore} from "@reduxjs/toolkit"
import classSlice from "./slice/classSlice";
import { attributeSlice } from "./slice/attributeSlice";
const store = configureStore({
    reducer:{
        classSlice:classSlice,
        attributeSlice: attributeSlice,

    },
  });

  export default store;