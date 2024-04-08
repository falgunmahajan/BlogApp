import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

interface UserTypes{
    fullName:String,
    email:String,
    mobileNumber:String,
    password:String,
    role:"admin"|"reader"|"writer"
}


interface initialStateTypes{
    user:UserTypes|null,
    login:Boolean,
    status:"idle"|"pending"|"succeeded"
}

const initialState:initialStateTypes={
    user:null,
    login:false,
    status:"idle"
}


export const fetchUser = createAsyncThunk("user/fetchUser",async()=>{
    const token = JSON.parse(localStorage.getItem("token")||"{}")
    const resp = await axios.get("/api/validUser",{
            headers:{
                Authorization:`Bearer ${token}`
            }
    
})
return resp.data
})

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
            builder.addCase(fetchUser.pending,(state,action)=>{
                state.status="pending"
            })
            .addCase(fetchUser.fulfilled,(state,action)=>{
                state.status="succeeded";
                state.user=action.payload;
                state.login=true
               })
               .addCase(fetchUser.rejected,(state,action)=>{
                state.status="idle";
                state.user=null
                state.login=false
               })
    }

})

export const userReducer=userSlice.reducer