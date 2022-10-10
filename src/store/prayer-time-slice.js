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
         console.log(result)
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const prayerTimeSlice = createSlice({
   name: 'prayer',
   initialState: { prayerTimes: [], prayerTime: null },
   reducers: {},
   extraReducers: {},
})
export const prayerTimeActions = prayerTimeSlice.actions
export default prayerTimeSlice
