// import RegisterForm from './RegisterForm';
// import Quote from './functional/Quote';
import Quote from './class-based/Quote';
import LikeDislike from './functional/LikeDislike';

const quotes = [
  {  text: 'Show me the money!', movie: 'Jerry Maguire', person: 'Rod Tidwell' },
  {
    text: "It's alive! It's alive!",
    movie: 'Frankenstein',
    person: 'Henry Frankenstein',
  },
  {
    text: 'I feel the need—the need for speed!',
    movie: 'Top Gun',
    person: 'Pete Mitchell and Nick Bradshaw',
  },
];

function App() {
  return (
    <div className="container mt-3">
      {quotes.map((quote, index) => (
        <Quote key={index} text={quote.text} person={quote.person} movie={quote.movie} />
      ))}
      <hr />
      {/* <LikeDislike>
        <Quote
          text="Show me the money!"
          movie="Jerry Maguire"
          person="Rod Tidwell"
        />
      </LikeDislike> */}
    </div>
  );
}

export default App;
