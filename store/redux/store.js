import {configureStore} from '@reduxjs/toolkit'
import favoriteReducer from './fovorites'

export const store = configureStore({
    reducer: {
        favoriteMeals: favoriteReducer
    }
})

