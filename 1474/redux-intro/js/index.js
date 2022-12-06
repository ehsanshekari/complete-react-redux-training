console.log(Redux);

// ACTION CREATOR
const increment = () => {
  // ACTION
  return {
    type: 'INCREMENT',
    payload: 5,
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
const fakeAction = () => {
  // ACTION
  return {
    type: 'x',
  };
};

// ACTION CREATOR
const setName = (name) => {
  // ACTION
  return {
    type: 'SET_NAME',
    payload: name,
  };
};

// REDUCER
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const nameReducer = (state = 'Ehsan', action) => {
  switch (action.type) {
    case 'SET_NAME':
      return action.payload;
    default:
      return state;
  }
};

// COMBINE REDUCERS
const reducers = Redux.combineReducers({
  counter: counterReducer,
  name: nameReducer,
});

// CREATE STORE
const store = Redux.createStore(reducers);

store.dispatch(setName('Amir'));
console.log(store.getState());
