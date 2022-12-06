// import Quote from "./class-based/Quote";
import Quote from "./functional/Quote";
import Card from './functional/Card';
import LikeDislike from './functional/LikeDislike';

const quotes = [
  {
    id: 1,
    text: "Show me the money!",
    person: "Rod Tidwell",
    movie: "Jerry Maguire",
  },
  {
    id: 2,
    text: "I'll be back!",
    person: "Arnold Schwarzenegger",
    movie: "The Terminator",
  },
];

function App() {
  const quotesToShow = quotes.map((quote) => (
    <Quote
      key={quote.id}
      text={quote.text}
      // person={quote.person}
      movie={quote.movie}
    />
  ));

  return (
    <div className="container">
      <Card />
      <div>{quotesToShow}</div>
      <div>
        <LikeDislike>
          <Quote text="Show me the money!" person="Rod" movie="Jerry Maguire" />
        </LikeDislike>
      </div>
    </div>
  );
}

export default App;
