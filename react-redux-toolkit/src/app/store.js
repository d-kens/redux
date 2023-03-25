import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice'
import  iceCreamReducer from  '../features/icecream/iceCreamSlice.js'
import userReducer from '../features/user/userSlice.js';

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer,
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store

