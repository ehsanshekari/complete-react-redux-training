import React from 'react';
import DOMPurify from 'dompurify';

import myImage from '../assets/images/no-image.png';

function SerialDetails({selectedSerial}) {
  if (!selectedSerial) {
    return (
      <div className="alert alert-warning">Select a serial from the list!</div>
    );
  }

  const cleanHTML = DOMPurify.sanitize(selectedSerial.summary);

  return (
    <div className="card">
      <img
        src={
          selectedSerial.image
            ? selectedSerial.image.original
            : myImage
        }
        className="card-img-top"
        alt="cover"
      />
      <div className="card-body">
        <h3 className="card-title">{selectedSerial.name}</h3>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: cleanHTML }}
        ></p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Genre: {selectedSerial.genres.join(',')}
        </li>
        <li className="list-group-item">
          Language: {selectedSerial.language}
        </li>
        <li className="list-group-item">
          Channel:{' '}
          {selectedSerial.webChannel
            ? selectedSerial.webChannel.name
            : 'UNKNOWN'}
        </li>
      </ul>
    </div>
  );
}

export default SerialDetails;
