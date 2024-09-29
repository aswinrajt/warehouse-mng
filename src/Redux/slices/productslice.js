

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


export const fetchProductThunk = createAsyncThunk('products/fetchProductThunk', async () => {
    const response = await axios.get('https://warehouse-server-lrii.onrender.com/products');
    console.log(response.data);
    return response.data; 
});


export const addProductThunk = createAsyncThunk('products/addProductThunk', async (newProduct) => {
    const response = await axios.post('https://warehouse-server-lrii.onrender.com/products', newProduct);
    return response.data; 
});

export const deleteProductThunk = createAsyncThunk('products/deleteProductThunk', async (id) => {
    await axios.delete(`https://warehouse-server-lrii.onrender.com/products/${id}`);
    return id;
})

export const editProductThunk = createAsyncThunk('products/editProductThunk', async (updatedProduct) => {
    const response = await axios.put(`https://warehouse-server-lrii.onrender.com/products/${updatedProduct.id}`, updatedProduct);
    return response.data; 
});



const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProductThunk.rejected, (state) => {
                state.loading = false;
                state.error = "API request failed";
                state.products = [];
            })
            .addCase(addProductThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(addProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload);
                toast.success("Product Added!")

            })
            .addCase(addProductThunk.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to add product";
            })
            .addCase(deleteProductThunk.fulfilled, (state, action) => {
                state.products = state.products.filter(product => product.id !== action.payload);
                toast.success("Item deleted!")

            })
            .addCase(deleteProductThunk.rejected, (state) => {
                state.error = "Failed to delete product";
            })
            .addCase(editProductThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(editProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.products.findIndex(product => product.id === action.payload.id);
                if (index !== -1) {
                    state.products[index] = action.payload; 
                    toast.info("PRODUCT UPDATED!")
                }
            })
            .addCase(editProductThunk.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to update product"; 
            });
    }
});

export default productSlice.reducer;
