import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../_reducer/rootReducer'

export const store = configureStore({ reducer: rootReducer })

