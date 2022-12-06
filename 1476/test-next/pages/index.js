import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';

import Quote from '../components/Quote';

export default function Home({ quotes }) {
  return (
    <div className="container mt-3">
      <Head>
        <title>Next Intro</title>
        <meta name="description" content="A quick introduction to Next.js" />
      </Head>

      {quotes.map((quote) => (
        <Quote key={quote._id} person={quote.author} text={quote.content} />
      ))}

      <hr />

      <Link href="/about">About</Link>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    'https://api.quotable.io/quotes?tags=success'
  );

  return {
    props: {
      quotes: response.data.results,
    },
  };
}
