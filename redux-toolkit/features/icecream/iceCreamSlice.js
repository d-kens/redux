const createSlice = require('@reduxjs/toolkit').createSlice;
const { cakeActions } = require('../cake/cakeSlice');

initialState = {
    numberOfIceCreams: 20
}

/*
 * extraReducer - decreasing the number of icecreams each time a cake is ordered
*/

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIceCreams--;
        },
        restocked: (state, action) => {
            state.numberOfIceCreams += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state, action) => {
            state.numberOfIceCreams--
        })
    }
})



module.exports = iceCreamSlice.reducer;

module.exports.iceCreamActions = iceCreamSlice.actions