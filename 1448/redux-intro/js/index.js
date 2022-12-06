console.log(Redux);

// ACTIONS AND ACTION CREATORS
const increment = () => {
  // ...
  return {
    type: 'INCREMENT',
    payload: 10
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

const fakeAction = () => {
  return {
    type: 'x',
  };
};

// REDUCERS
const counterReducer = (state = 0, action) => {
  console.log('------- counterReducer -------', state, action)
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// COMBINE REDUCERS AND CREATE STORE
const reducers = Redux.combineReducers({
  counter: counterReducer,
});
const store = Redux.createStore(reducers);

console.log(store.getState());
store.dispatch(fakeAction());
console.log(store.getState());

// store.dispatch(increment());
// console.log(store.getState());

// store.dispatch(increment());
// console.log(store.getState());

// store.dispatch(decrement());
// console.log(store.getState());

// store.dispatch(decrement());
// console.log(store.getState());
