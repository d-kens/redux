const store = require('./app/store.js');
const cakeActions = require('./features/cake/cakeSlice.js').cakeActions;
const iceCreamActions = require('./features/icecream/iceCreamSlice.js').iceCreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers


console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("Updated state: ", store.getState())
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(2));

// unsubscribe();

