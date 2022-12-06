import { combineReducers } from "redux";

// REDUCER
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

// REDUCER
const colorReducer = (state = 'blue', action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  counter: counterReducer,
  color: colorReducer,
})