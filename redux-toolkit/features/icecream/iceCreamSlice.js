const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numberOfIceCreams: 20
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIceCreams--;
        },
        restocked: (state, action) => {
            state.numberOfIceCreams += action.payload;
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numberOfIceCreams--
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state, action) => {
            state.numberOfIceCreams--;
        })
    }
});

// Default export
module.exports = iceCreamSlice.reducer;

// Named export
module.exports.iceCreamActions = iceCreamSlice.actions;