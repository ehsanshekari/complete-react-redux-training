import React from 'react';

import Serial from './Serial';

function SerialList({serials, onItemClick}) {
  console.log('SerialList > props.serials:', serials);

  const renderedSerials = serials.map((el) => <Serial serial={el.show} onItemClick={onItemClick}/>);

  return <div>{renderedSerials}</div>;
}

export default SerialList;
