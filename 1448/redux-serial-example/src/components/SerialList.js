import React from 'react';

import Serial from './Serial';

const SerialList = ({ serials, onSerialClick }) => {
  console.log('SerialList > props.serials', serials);
  return (
    <div>
      {serials.map((serial) => (
        <Serial key={serial.id} serial={serial.show} onSerialClick={onSerialClick} />
      ))}
    </div>
  );
};

export default SerialList;
