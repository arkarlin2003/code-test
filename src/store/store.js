import { api } from '@/services/api/api'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [api.reducerPath]:api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
})