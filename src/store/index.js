import { configureStore } from '@reduxjs/toolkit'
import clientSlice from './client-slice'

const store = configureStore({
   reducer: {
      client: clientSlice.reducer,
   },
})

export default store
