import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../api/auth';
export const login = createAsyncThunk(
    "user/login",
    async(values,{rejectWithValue}) =>{
      try{
        const response = await axios.post(`${baseURL}/login`, values);
      if (response.status !== 200) {
        throw new Error();
      }
      const responseData = await response.data;
      console.log(responseData)
      // localStorage.setItem("user",JSON.stringify(responseData)) 
      return responseData;
      }catch(erorr){
        if (!err.response) {
          throw err;
        }
        return rejectWithValue(err.response);
      }
  }
)

export const register = createAsyncThunk(
  "user/register",
  async(values,{rejectWithValue}) =>{
    try{
      const response = await axios.post(`${baseURL}/register`, values);
    if (response.status !== 200) {
      throw new Error();
    }
    const responseData = await response.data;
    console.log(responseData)
    // localStorage.setItem("user",JSON.stringify(responseData)) 
    return responseData;
    }catch(error){
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
}
)


const initialState = {
    loading:false,
    user:null,
    error:null
}
const authSlice = createSlice({
  name: "user",
  initialState,
  extraReducers:(builder) =>{
    builder.addCase(login.pending, (state)=>{
      state.loading = true;
      state.user = null;
      state.error = null;
    })
    builder.addCase(login.fulfilled,(state,action) =>{
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    builder.addCase(login.rejected, (state,action)=>{
      state.loading = false;
      state.user = null;
      state.error = action.payload?.data.message;
      
    })
    builder.addCase(register.pending, (state)=>{
      state.loading = true;
      state.user = null;
      state.error = null;
    })
    builder.addCase(register.fulfilled,(state,action) =>{
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    builder.addCase(register.rejected, (state,action)=>{
      state.loading = false;
      state.user = null;
      state.error = action.payload?.data.message;
      
    })
  }
});

export default authSlice.reducer;








