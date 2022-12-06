import { combineReducers, createStore } from "redux";

// ACTION CREATOR
export const addName = (name) => {
  // ACTION
  return {
    type: 'ADD_NAME',
    payload: name,
  };
};

// REDUCER
// CAN NOT RETURN UNDEFINED => INITIALIZATION
// DO NOT MUTATE STATE
// MUST BE PURE FUNCTIONS
const namesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NAME':
      // THIS IS THE WRONG WAY!
      // state.push(action.payload);
      // return state;
      return [...state, action.payload];
    default:
      return state;
  }
};

const reducers = combineReducers({names: namesReducer});

const store = createStore(reducers);

export default store;