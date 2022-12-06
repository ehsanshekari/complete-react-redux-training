import React from 'react';

import myImage from '../assets/images/no-image.png';

function Serial({serial, onItemClick}) {
  console.log('Serial > props.serial:', serial)
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }} onClick={() => onItemClick(serial)}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={serial.image ? serial.image.medium : myImage} className="img-fluid rounded-start" alt="cover" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{serial.name}</h5>
            <p className="card-text">
              <small className="text-muted">{serial.genres.join(',')}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serial;
