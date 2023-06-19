import { createSlice } from "@reduxjs/toolkit";


let initialColor={
    color:"#000000"
}

export const ColorSlice = createSlice({
    name:"ThemeColor",
    initialState : initialColor,
    reducers:{
        ThemeColor:(state,action)=>{
        console.log(action)
            state.color = action.payload
           
        }
    }

})

export const {ThemeColor} = ColorSlice.actions

export default ColorSlice.reducer