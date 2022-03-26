import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (obj, { dispatch }) =>{
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:8000/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data.data
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: { 
    user: '',
    status: null,
    isLoggedIn: false
  },
  reducers: {
    refresh(state, action) {
      state.isLoggedIn = true
    },
    logout(state, action) {
      localStorage.removeItem('token');
      state.isLoggedIn = false
    }
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
      state.status = 'success'
    },
    [getUser.rejected]: (state, action) => {
      localStorage.removeItem('token');
      state.isLoggedIn = false
      state.status = 'failed'
    }
  }
})

export default authSlice