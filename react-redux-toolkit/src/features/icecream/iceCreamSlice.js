import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

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
        builder.addCase(cakeOrdered, (state, action) => {
            state.numberOfIceCreams--;
        })
    }
});

// Default export
export default iceCreamSlice.reducer;

// Named export
export const {ordered, restocked} = iceCreamSlice.actions