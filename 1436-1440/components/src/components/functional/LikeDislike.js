import React from "react";

const LikeDislike = (props) => {
  return(
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Submit your idea</h5>
        <h6 className="card-subtitle mb-2 text-muted">What is your idea about item below?</h6>
        <p className="card-text">{props.children}</p>
        <hr />
        <a href="#" className="btn btn-primary card-link">Like</a>
        <a href="#" className="btn btn-danger card-link">Dislike</a>
      </div>
    </div>
  )
}

export default LikeDislike;