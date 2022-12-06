import React from "react";

const Card = () => {
  return (
      <div
        className="card mt-5"
        style={{ width: "18rem", backgroundColor: "red" }}
      >
        <img
          src="https://picsum.photos/100"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="http://varzesh3.com/" className="card-link">
            Card link
          </a>
          <a href="http://www.gogole.com" className="card-link">
            Another link
          </a>
        </div>
      </div>
  );
};

export default Card;
