const configureStore  = require("@reduxjs/toolkit").configureStore;
//const reduxLogger = require('redux-logger');
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/icecream/iceCreamSlice.js');
const userReducer = require('../features/user/userSlice.js')

//const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer,
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store

