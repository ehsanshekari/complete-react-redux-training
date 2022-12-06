import { SERIAL_SELECTED, FETCH_SERIAL_LIST } from './types';

// ACTION CREATOR
export const fetchSerialsList = (searchTerm) => {
  // ACTION
  return {
    type: FETCH_SERIAL_LIST,
    payload: searchTerm,
  };
};

// ACTION CREATOR
export const selectedSerial = (serial) => {
  console.log('selectedSerial:', serial);
  // ACTION
  return {
    type: SERIAL_SELECTED,
    payload: serial,
  };
};
