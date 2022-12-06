import { combineReducers } from 'redux';

import { serialsReducers, selectedSerialReducer } from './serialsReducer';

export default combineReducers({
  serials: serialsReducers,
  selectedSerial: selectedSerialReducer,
});
