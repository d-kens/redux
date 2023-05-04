const store = require("./app/store.js");
const cakeActions = require('./features/cake/cakeSlice.js').cakeActions;


console.log('initial state: ', store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('updated stste: ', store.getState());
})


store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));



unsubscribe();
