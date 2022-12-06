import React from 'react';

function Quote(props) {
  return (
    <div className="card mt-3">
      <div className="card-header">Quote</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{props.text}</p>
          <footer className="blockquote-footer">
            {props.person}
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default Quote;
