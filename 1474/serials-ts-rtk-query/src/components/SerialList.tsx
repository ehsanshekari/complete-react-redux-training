import React from 'react';

import { Serial as ISerial, SerialData } from '../services/serialApi';
import Serial from './Serial';

interface SerialListProps {
  serials: ISerial[];
  onItemClick: (serial: SerialData) => void ;
}

const SerialList: React.FC<SerialListProps> = ({serials, onItemClick}) => {
  return (
    <div>
      {serials.map((serial) => (
        <Serial key={serial.show.id} serial={serial.show} onItemClick={onItemClick}/>
      ))}
    </div>
  );
}

export default SerialList;
