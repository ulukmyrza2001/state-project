import { configureStore } from '@reduxjs/toolkit'
// import { adminSlice } from './admin-slice'
// import { clientSlice } from './client-slice'

const store = configureStore({
   reducer: {
      // client: clientSlice.reducer,
      // admin: adminSlice.reducer,
   },
})

export default store
