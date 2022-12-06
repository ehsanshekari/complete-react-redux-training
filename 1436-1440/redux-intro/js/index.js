console.log(Redux);

// ACTIONS AND ACTION CREATORS
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

// REDUCERS
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// COMBINE REDUCERS AND CREATE STORE
const reducers = Redux.combineReducers({ counter: counterReducer });
const store = Redux.createStore(reducers);

store.dispatch(increment());

console.log(store.getState());

store.dispatch(increment());

console.log(store.getState());

store.dispatch(decrement());

console.log(store.getState());


