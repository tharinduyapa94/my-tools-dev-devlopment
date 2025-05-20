import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const accType=createAsyncThunk("accType",async ()=>{
    const data=await fetch('https://localhost:7048/api/CdMaster/AccType')
    return data.json()
})

const accTypeSlice=createSlice({
    name:'accTyp',
    initialState:{
        accTypeLoading:false,
        accTypeAll:[],
        accTypeError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(accType.pending,(state,action)=>{
            state.accTypeLoading=true;
        });
        builder.addCase(accType.fulfilled,(state,action)=>{
            state.accTypeLoading=false;
            state.accTypeAll=action.payload
        })
        builder.addCase(accType.rejected,(state,action)=>{
            state.accTypeError=true;
        })
    }
})

export default accTypeSlice.reducer;