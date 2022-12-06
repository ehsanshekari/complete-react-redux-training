import React from 'react';

import Serial from './Serial';
import { Serial as ISerial, SerialData } from '../services/serialApi';

interface SerialListProps {
  serials: ISerial[];
  onItemClick: (serial: SerialData) => void;
}

const SerialList: React.FC<SerialListProps> = ({ serials, onItemClick }) => {
  console.log('SerialList > props.serials:', serials);

  const renderedSerials = serials.map((el) => (
    <Serial serial={el.show} onItemClick={onItemClick} />
  ));

  return <div>{renderedSerials}</div>;
};

export default SerialList;
