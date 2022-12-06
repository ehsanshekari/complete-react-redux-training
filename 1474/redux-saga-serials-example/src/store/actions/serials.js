import { FETCH_SERIAL_LIST, SERIAL_SELECTED } from "./types";

// ACTION CREATOR
export const fetchSerialList = (searchTerm) => {
  // ACTION
  return {
    type: FETCH_SERIAL_LIST,
    payload: searchTerm,
  };
};

// ACTION CREATOR
export const selectedSerial = (serial) => {
  // ACTION
  return {
    type: SERIAL_SELECTED,
    payload: serial,
  };
};

