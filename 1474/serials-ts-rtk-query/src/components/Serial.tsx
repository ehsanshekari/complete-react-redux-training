import React from 'react';

import NoImage from '../assets/images/no-image.png';
import { SerialData } from '../services/serialApi';

interface SerialProps {
  serial: SerialData;
  onItemClick: (serial: SerialData) => void;
}

const Serial: React.FC<SerialProps> = ({ serial, onItemClick }) => {
  const onClick = () => {
    onItemClick(serial);
  };

  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }} onClick={onClick}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={serial.image ? serial.image.medium : NoImage}
            className="img-fluid rounded-start"
            alt="cover"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{serial.name}</h5>
            <p className="card-text">
              <small className="text-muted">{serial.genres.join(', ')}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serial;
