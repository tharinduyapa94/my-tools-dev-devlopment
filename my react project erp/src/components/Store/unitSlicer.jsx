import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const unitRead=createAsyncThunk("unitRead",async ()=>{
    const data=await fetch('https://localhost:7048/api/CdMaster/UnitList')
    return data.json()
})

const unitSlice=createSlice({
    name:'untRead',
    initialState:{
        unitLoading:false,
        units:[],
        unitError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(unitRead.pending,(state,action)=>{
            state.unitLoading=true;
        });
            builder.addCase(unitRead.fulfilled,(state,action)=>{
                state.unitLoading=false;
                state.units=action.payload
            })
              builder.addCase(unitRead.rejected,(state,action)=>{
                state.unitError=true;
              })
    }
})

export default  unitSlice.reducer;

 