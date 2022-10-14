import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const API_KEY_WEATHER = '37607ff2-ba16-41a1-9d8f-416a0c28cf78'

export const getWeather = createAsyncThunk('getWeather/weather', async () => {
   try {
      const result = await fetch(
         `https://api.weather.yandex.ru/v2/informers?lat=40.520183&lon=72.7729773`,
         {
            method: 'GET',
            headers: {
               'X-Yandex-API-Key': API_KEY_WEATHER,
            },
         }
      )

      return { result }
   } catch (error) {
      return error
   }
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {},
   reducers: {},
   extraReducers: {},
})

export const clientActions = weatherSlice.actions
export default weatherSlice
