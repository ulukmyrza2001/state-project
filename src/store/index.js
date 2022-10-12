import { configureStore } from '@reduxjs/toolkit'
import clientSlice from './client-slice'
import prayerTimeSlice from './prayer-time-slice'

const store = configureStore({
   reducer: {
      client: clientSlice.reducer,
      prayer: prayerTimeSlice.reducer,
   },
})

export default store
