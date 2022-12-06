import React from "react";
// import propTypes from 'prop-types'

const Quote = (props) => {
  // console.log('Quote > props:', props);
  return(
    <div className="card mt-3">
      <div className="card-header">Quote</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{props.text}</p>
          <footer className="blockquote-footer">
          {props.person} <cite>{props.movie}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

Quote.defaultProps = {
  person: 'UNKNOWN'
}

// Quote.propTypes = {
//   movie: propTypes.string
// }

export default Quote;