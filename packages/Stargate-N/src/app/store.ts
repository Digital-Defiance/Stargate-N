import { configureStore } from '@reduxjs/toolkit'
import chevronReducer from './chevronSlice'


export const store = configureStore({
  reducer: {
    chevron: chevronReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch