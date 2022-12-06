import React from 'react';

import Serial from './Serial';

function SerialList(props) {
  console.log('SerialList > props.serials:', props.serials);

  const renderedSerials = props.serials.map((el) => <Serial serial={el.show} onItemClick={props.onItemClick}/>);

  return <div>{renderedSerials}</div>;
}

export default SerialList;
