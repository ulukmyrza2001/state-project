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

const initialState = {
   isLoading: null,
   government: [],
   governmentApparatus: [],
   villageCouncil: [],
}

const clientSlice = createSlice({
   name: 'client',
   initialState,
   reducers: {},
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
            state.datas = result
         }
      },
      [clientGetData.rejected]: (state) => {
         state.isLoading = false
      },
   },
})
export const clientActions = clientSlice.actions
export default clientSlice
