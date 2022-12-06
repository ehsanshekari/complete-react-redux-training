import React from 'react';
import Serial from './Serial';

function SerialList({serials, onItemClick}) {
  return (
    <div>
      {serials.map((serial) => (
        <Serial serial={serial.show} onItemClick={onItemClick}/>
      ))}
    </div>
  );
}

export default SerialList;
