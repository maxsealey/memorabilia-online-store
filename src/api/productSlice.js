import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    items:[],
    status:null,
    error:null
};

export const productFetch = createAsyncThunk(
    "products/productsFetch",
    async(id=null, {rejectWithValue})=> {
        try {
            const res = await axios.get("https://http://localhost:8787")
            return res?.data
        } catch (err){
            return rejectWithValue("error retrieving data");
        }
    }
);

const productSlice = createSlice(
    {
        name:"products",
        initialState,
        reducers: {},
        extraReducers: {
            [productFetch.pending]: (state, action) =>{
                state.status = "pending"
            },
            [productFetch.success]: (state, action) =>{
                state.status = "success"
                state.items = action.payload
            },
            [productFetch.failed]: (state, action) =>{
                state.status = "failed"
                state.error = action.payload
            }
        }
    }
);

export default productSlice.reducer;