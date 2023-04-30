const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;


const initialState = {
    loading: false,
    users: [],
    error: '',
}

/*
* action types
*/
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';


/*
* action creators
*/
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload,
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}



// Asyc action creator
const fetchUsers = () => {
    /*
        * This function is allowed to have side effects such as async calls
        * It can also dispatch actions - It receives the dispatch method as its arguement
    */
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response => {
                const users = response.data.map(user => user.id);
                dispatch(fetchUsersSuccess(users))
            }
        ).catch(
            error => {
                dispatch(fetchUsersFailure(error.message))
            }
        )
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const unsubscribe = store.subscribe(() => {console.log(store.getState())});
store.dispatch(fetchUsers());