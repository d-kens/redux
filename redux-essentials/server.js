const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();


/*
* Initial state
*/
const initialCakeState = {
    numberOfCakes: 10
}

const initialIceCreamState = {
    numberOfIceCreams: 20
}

/*
* Action types
*/
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

/*
* Action creators
*/
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

function restockCake( qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

function orderIceCream( qty = 1 ) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty,
    }
}

function restockIceCream ( qty = 1 ) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty,
    }
}

/*
* Reducers
*/
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload,
            }
        default: 
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - action.payload,
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + action.payload,
            }
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }
        default: 
            return state
    }
}




const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

/*
* Store
 - Holds the application state
 - Allows access to state via getState()
 - Allow state to be updated via dispatch(action)
 - Allow application to register listeners via subscribe(listener)
 - Handle unregistering of listeners via function returned by subscribe(listener)
*/
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('initial state: ', store.getState());
const unsubscribe = store.subscribe(() => console.log('updated state: ', store.getState()));
const actions = bindActionCreators({
    orderCake,
    restockCake,
    orderIceCream,
    restockIceCream
}, store.dispatch)
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);
unsubscribe();