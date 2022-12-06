const Card = () => {
  // JSX
  return (
    <div class="card mt-3" style={{width:"18rem"}}>
      <img src="https://picsum.photos/100" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
export const a = 10;
export const b = 20;
