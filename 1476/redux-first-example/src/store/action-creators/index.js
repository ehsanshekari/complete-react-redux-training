// ACTION CREATOR
export const increment = () => {
  // ACTION
  return {
    type: 'INCREMENT',
  };
};

// ACTION CREATOR
export const decrement = () => {
  // ACTION
  return {
    type: 'DECREMENT',
  };
};

// ACTION CREATOR
export const setColor = (color) => {
  // ACTION
  return {
    type: 'SET_COLOR',
    payload: color,
  };
};
