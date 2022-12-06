import Quote from './Quote';
// import LikeDisLike from './LikeDisLike';

const quotes = [
  {
    id: '1',
    text: 'Show me the money!',
    person: 'Rod Tidwell',
    movie: 'Jerry Maguire',
  },
  {
    id: '2',
    text: 'E.T. phone home',
    person: 'E.T.',
    movie: 'E.T. the Extra-Terrestrial',
  },
  {
    id: '3',
    text: 'React is good',
    person: 'FE developers',
    movie: 'i3center',
  },
];

const App = () => {
  return (
    <div className="container mt-3">
      <Quote key="key1" text="text1" movie="movie1" person={2}/>
      {/* {quotes.map((quote) => (
          <Quote key={quote.id} text={quote.text} movie={quote.movie} />
      ))} */}
      {/* <LikeDisLike>
        <Quote text="Show me the money!" person="Rod Tidwell" movie="Jerry Maguire" />
      </LikeDisLike> */}
    </div>
  );
};

export default App; // default export
