import { combineReducers } from 'redux';

// REDUCER
const counterReducer = (state = 20, action) => {
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
const colorReducer = (state = 'blue', action) => {
  switch (action.type) {
    case 'NEW_COLOR':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  counter: counterReducer,
  color: colorReducer
});
