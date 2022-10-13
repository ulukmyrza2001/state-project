import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { API_ROUTES_GET } from '../utils/constants/general'

export const clientGetData = createAsyncThunk(
   'clientGetData/client',
   async (category, { rejectWithValue }) => {
      try {
         const result = await baseFetch({
            path: `${API_ROUTES_GET[category].path}`,
            method: 'GET',
         })
         return { result, category }
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getOneData = createAsyncThunk(
   'getOneData/client',
   async ({ id, category }, { rejectWithValue }) => {
      try {
         const result = await baseFetch({
            path: `${API_ROUTES_GET[category].path}`,
            method: 'GET',
         })
         return { result, id }
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const initialState = {
   isLoading: false,
   government: [],
   governmentApparatus: [],
   villageCouncil: [],
   data: [],
   oneData: null,
}

const clientSlice = createSlice({
   name: 'client',
   initialState,
   reducers: {
      clearOneData(state) {
         state.oneData = null
      },
   },
   extraReducers: {
      [clientGetData.pending]: (state) => {
         state.isLoading = true
      },
      [clientGetData.fulfilled]: (state, { payload: { result, category } }) => {
         state.isLoading = false
         if (category === 'leadership') {
            state.government = result.filter((item) => item.type === '1')
            state.governmentApparatus = result.filter(
               (item) => item.type === '2'
            )
            state.villageCouncil = result.filter((item) => item.type === '3')
         } else {
            state.data = result
         }
      },
      [clientGetData.rejected]: (state) => {
         state.isLoading = false
      },
      [getOneData.pending]: (state) => {
         state.isLoading = true
      },
      [getOneData.fulfilled]: (state, { payload }) => {
         state.isLoading = false
         state.oneData = payload.result.find((item) => +item.id === +payload.id)
      },
      [getOneData.rejected]: (state) => {
         state.isLoading = false
      },
   },
})
export const clientActions = clientSlice.actions
export default clientSlice
