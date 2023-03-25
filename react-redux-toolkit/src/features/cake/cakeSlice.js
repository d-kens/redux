// import createSlice function
import { createSlice } from '@reduxjs/toolkit';

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
export default cakeSlice.reducer;

// Named export
export const { ordered, restocked } = cakeSlice.actions
