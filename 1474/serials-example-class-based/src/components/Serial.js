function Serial(props) {
  console.log("Serial > props.serial", props.serial);

  const onClick = () => {
    props.onItemClick(props.serial);
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }} onClick={onClick}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.serial.image ? props.serial.image.medium : '/images/no-image.png'}
            className="img-fluid rounded-start"
            alt="cover"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.serial.name}</h5>
            <p className="card-text">
              <small className="text-muted">
                {props.serial.genres.join(",")}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serial;
