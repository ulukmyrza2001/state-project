import { configureStore } from '@reduxjs/toolkit'
import clientSlice from './client-slice'
import newsSlice from './news-slice'
import prayerTimeSlice from './prayer-time-slice'
import weatherSlice from './weather-slice'

const store = configureStore({
   reducer: {
      client: clientSlice.reducer,
      prayer: prayerTimeSlice.reducer,
      news: newsSlice.reducer,
      weather: weatherSlice.reducer,
   },
})

export default store
