import {combineReducers} from 'redux'; 

import { selectedSerialReducer, serialsReducer } from "./serialsReducer";

export default combineReducers({
  serials: serialsReducer,
  selectedSerial: selectedSerialReducer
})