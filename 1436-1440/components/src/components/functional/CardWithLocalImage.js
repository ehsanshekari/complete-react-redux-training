import React from "react";
import myImage from "../../assets/images/img1.jpg";

const CardWithLocalImage = () => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={myImage} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CardWithLocalImage;
