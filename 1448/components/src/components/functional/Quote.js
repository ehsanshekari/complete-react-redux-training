const Quote = ({text, person, movie}) => {
  return (
    <div className="card mb-3">
      <div className="card-header">Quote</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{text}</p>
          <footer className="blockquote-footer">
            {person} famous in <cite title="Source Title">{movie}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Quote;
