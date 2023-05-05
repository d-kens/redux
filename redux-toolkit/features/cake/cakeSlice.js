const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numberOfCakes: 10
};

/*
* createSlice
 - Will automatically generate action types and action creators 
 - The main reducer is also returned from the createSlice which we provide to the redux store
*/
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfCakes--;
        },
        restocked: (state, action) => {
            state.numberOfCakes += action.payload;
        }
    }
});

// default export
module.exports = cakeSlice.reducer

// named export 
module.exports.cakeActions = cakeSlice.actions;