import { configureStore } from '@reduxjs/toolkit'
import { counter } from './reducers'
import { auth } from './reducers'

export default configureStore({
  reducer: {
    counter: counter.reducer,
    auth: auth.reducer,
  },
})