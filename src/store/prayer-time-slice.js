import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getPrayerTime = createAsyncThunk(
   'getPrayerTime/prayer',
   async (_, { rejectWithValue }) => {
      try {
         const response = await fetch(
            `http://api.aladhan.com/v1/calendar?latitude=40.5382635&longitude=72.9366874&month=${String(
               new Date().getMonth() + 1
            )}&year=2022`
         )

         const result = await response.json()
         return result.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const prayerTimeSlice = createSlice({
   name: 'prayer',
   initialState: { isLoading: false, prayerTimes: [], prayerTime: null },
   reducers: {},
   extraReducers: {
      [getPrayerTime.pending]: (state) => {
         state.isLoading = true
      },
      [getPrayerTime.fulfilled]: (state, action) => {
         state.isLoading = false
         state.prayerTimes = action.payload
         state.prayerTime = action.payload.find(
            (el) =>
               String(new Date(el.date.readable).getDate()) ===
               String(new Date().getDate())
         )
      },
      [getPrayerTime.rejected]: (state) => {
         state.isLoading = false
      },
   },
})
export const prayerTimeActions = prayerTimeSlice.actions
export default prayerTimeSlice
