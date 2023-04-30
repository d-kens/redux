const redux = require('redux');
const produce = require('immer').produce

const initialState = {
    name: "Onyango Dickens",
    address: {
        street: "123 MAin St",
        city: "Nairobi",
        state: "Nairobi"
    },
}

const UPDATE_STREET = 'UPDATE_STREET';

const updateStreet = (street) => {
    return {
        type: UPDATE_STREET,
        payload: street,
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_STREET:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            });
        default:
            return state
    }
}

const store = redux.createStore(reducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(updateStreet('789 Main St'));
unsubscribe()