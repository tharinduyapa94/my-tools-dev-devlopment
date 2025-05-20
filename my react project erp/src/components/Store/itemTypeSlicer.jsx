import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const itemTypeRead=createAsyncThunk("itemTypeRead",async ()=>{
    const data=await fetch('https://localhost:7048/api/Item/ItemType')
    return data.json()
})

const itemTypeSlice=createSlice({
    name:'itmTypeGet',
    initialState:{
        itmTypeLoading:false,
        ityp:[],
        itmTypeError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(itemTypeRead.pending,(state,action)=>{
            state.itmTypeLoading=true;
        });
            builder.addCase(itemTypeRead.fulfilled,(state,action)=>{
                state.itmTypeLoading=false;
                state.ityp=action.payload
            })
              builder.addCase(itemTypeRead.rejected,(state,action)=>{
                state.itmTypeError=true;
              })
    }
})

export default itemTypeSlice.reducer;