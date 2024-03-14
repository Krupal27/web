import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{},
    reducers:{
        ADD_USER:(state,action)=>{},
        REMOVE_USER:(state,action)=>{}
    }

})
console.log(userSlice.actions);

export default userSlice.reducer