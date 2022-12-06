import React from 'react';
import propTypes from 'prop-types';

function Quote(props) {
  return (
    <div className="card mt-3">
      <div className="card-header">Quote</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{props.text}</p>
          <footer className="blockquote-footer">
            {props.person} <cite title="Source Title">{props.movie}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

Quote.defaultProps = {
  person: 'UNKNOWN',
};

Quote.propTypes = {
  person: propTypes.string,
};

export default Quote;
