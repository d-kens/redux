const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    numberOfShoes: 20
}

const SHOE_ORDERED = 'SHOE_ORDERED';
const RESTOCK_SHOE = 'SHOE_RESTOCKED';

function orderShoes() {
    return {
        type: SHOE_ORDERED,
        payload: 1
    }
}

function restockShoes(quantity = 1) {
    return {
        type: RESTOCK_SHOE,
        payload: quantity
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOE_ORDERED:
            return {
                ...state,
                numberOfShoes: state.numberOfShoes - action.payload
            }
        case RESTOCK_SHOE:
            return {
                ...state,
                numberOfShoes: state.numberOfShoes + action.payload
            }
        default:
            return state
    }
}


const store = createStore(reducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(orderShoes());
store.dispatch(orderShoes());
store.dispatch(orderShoes());
store.dispatch(restockShoes());
store.dispatch(restockShoes(2));