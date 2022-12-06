import React from 'react';

function LikeDislike(props) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">What is your idea</h5>
        <h6 className="card-subtitle mb-2 text-muted">About item below</h6>
        <p className="card-text">
          {props.children}
        </p>
        <a href="/" className="btn btn-primary" style={{ marginRight: '2px' }}>
          Like
        </a>
        <a href="/" className="btn btn-danger">
          Dislike
        </a>
      </div>
    </div>
  );
}

export default LikeDislike;
