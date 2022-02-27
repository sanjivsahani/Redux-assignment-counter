import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../reducer/Slice";


export default configureStore({
    reducer:{
        counter:counterSlice,
    }
})