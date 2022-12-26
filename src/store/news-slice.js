/* eslint-disable default-param-last */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { API_ROUTES_GET } from '../utils/constants/general'

export const getCountOfNews = createAsyncThunk(
   'getCountOfNews/news',
   async (_, { rejectWithValue, dispatch }) => {
      try {
         const result = await baseFetch({
            path: 'agriculture/acEvent/count-page',
            method: 'GET',
         })
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getNewsState = createAsyncThunk(
   'getNewsState/news',
   async (offset = 1, { rejectWithValue }) => {
      try {
         const result = await baseFetch({
            path: `${API_ROUTES_GET.newsState.path}/${offset}`,
            method: 'GET',
         })
         return { result }
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getNewsWorld = createAsyncThunk(
   'getNewsWorld/news',
   async (offset = 1, { rejectWithValue }) => {
      try {
         const result = await baseFetch({
            path: `${API_ROUTES_GET.newsWorld.path}/${offset}`,
            method: 'GET',
         })
         return { result }
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getOneWorldNews = createAsyncThunk(
   'getOneWorldNews/news',
   async ({ id, offset }, { rejectWithValue }) => {
      try {
         const result = await baseFetch({
            path: `${API_ROUTES_GET.newsWorld.path}/${offset}`,
            method: 'GET',
         })
         return { result, id }
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getOneStateNews = createAsyncThunk(
   'getOneStateNews/news',
   async ({ id, offset }, { rejectWithValue }) => {
      try {
         const result = await baseFetch({
            path: `${API_ROUTES_GET.newsState.path}/${offset}`,
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
   newsState: [],
   newsWorld: [],
   oneNewsState: null,
   oneNewsWorld: null,
   countOfState: 0,
   countOfWorld: 0,
}

const newsSlice = createSlice({
   name: 'news',
   initialState,
   reducers: {
      clearOneData(state) {
         state.oneNews = null
      },
   },
   extraReducers: {
      [getCountOfNews.pending]: (state) => {
         state.isLoading = true
      },
      [getCountOfNews.fulfilled]: (state, { payload }) => {
         state.isLoading = false
         state.countOfState = payload.state
         state.countOfWorld = payload.world
      },
      [getCountOfNews.rejected]: (state) => {
         state.isLoading = false
      },
      [getNewsState.pending]: (state) => {
         state.isLoading = true
      },
      [getNewsState.fulfilled]: (state, { payload: { result } }) => {
         state.isLoading = false
         state.newsState = result
      },
      [getNewsState.rejected]: (state) => {
         state.isLoading = false
      },
      [getNewsWorld.pending]: (state) => {
         state.isLoading = true
      },
      [getNewsWorld.fulfilled]: (state, { payload: { result } }) => {
         state.isLoading = false
         state.newsWorld = result
      },
      [getNewsWorld.rejected]: (state) => {
         state.isLoading = false
      },

      [getOneStateNews.pending]: (state) => {
         state.isLoading = true
      },
      [getOneStateNews.fulfilled]: (state, { payload }) => {
         state.isLoading = false
         state.oneNewsState = payload.result.find(
            (item) => +item.id === +payload.id
         )
      },
      [getOneStateNews.rejected]: (state) => {
         state.isLoading = false
      },

      [getOneWorldNews.pending]: (state) => {
         state.isLoading = true
      },
      [getOneWorldNews.fulfilled]: (state, { payload }) => {
         state.isLoading = false
         state.oneNewsWorld = payload.result.find(
            (item) => +item.id === +payload.id
         )
      },
      [getOneWorldNews.rejected]: (state) => {
         state.isLoading = false
      },
   },
})
export const newsActions = newsSlice.actions
export default newsSlice
