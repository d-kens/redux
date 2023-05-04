// import createSlice function
const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numberOfCakes: 10
};

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


// Default export
module.exports = cakeSlice.reducer;

// Named export
module.exports.cakeActions = cakeSlice.actions;
