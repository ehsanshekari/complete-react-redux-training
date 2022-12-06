// console.log(Redux);

// ACTION CREATOR
const increment = () => {
  // ACTION
  return {
    type: 'INCREMENT',
  };
};

// ACTION CREATOR
const decrement = () => {
  // ACTION
  return {
    type: 'DECREMENT',
  };
};

// ACTION CREATOR
const setName = (name) => {
  // ACTION
  return {
    type: 'SET_NAME',
    payload: name
  }
} 

// REDUCER
const counterReducer = (state = 0, action) => {
  console.log('counterReducer > action', action)
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// REDUCER
const nameReducer = (state = 'Ehsan', action) => {
  console.log('nameReducer > action', action)
  switch (action.type) {
    case 'SET_NAME':
      return action.payload;
    default:
      return state;
  }
};

const reducers = Redux.combineReducers({
  counter: counterReducer,
  name: nameReducer
});

const store = Redux.createStore(reducers);

console.log(store.getState());
store.dispatch(increment());
console.log(store.getState());
store.dispatch(increment());
console.log(store.getState());
store.dispatch(setName('Amir'));
console.log(store.getState());


