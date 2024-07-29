import { api } from '@/services/api/api'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/services/features/cartSlice'
export const store = configureStore({
  reducer: {
    [api.reducerPath]:api.reducer,
    carts:cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
})