import { configureStore } from "@reduxjs/toolkit";
import productslice from "./slices/productslice";



const productStore=configureStore({
    reducer:{
        productReducer:productslice

    }
})

export default productStore