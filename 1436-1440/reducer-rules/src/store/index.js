import { combineReducers, createStore } from 'redux';

// Action Creator
export const addName = (name) => {
  return {
    type: 'ADD_NAME',
    payload: name,
  };
};

// Reducer
// DO NOT RETURN UNDEFINED
// DO NOT MUTATE STATE
// MUST BE PURE FUNCTIONS (SIDE EFFECT)
const namesReducer = (state = ['Ehsan'], action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.payload]
    default:
      return state;
  }
};

const reducers = combineReducers({names: namesReducer});

const store = createStore(reducers);

export default store;