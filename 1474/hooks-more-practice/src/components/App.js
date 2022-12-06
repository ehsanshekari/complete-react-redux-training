// [] => in the first render
// nothing => in every render
// [var1, var2, ...] => in the first render and when one of these variables changes

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [term, setTerm] = useState('javascript');
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   console.log('THE SECOND PARAMETER IS NOT PROVIDED');
  // });

  // useEffect(() => {
  //   console.log('EMPTY ARRAY');
  // },[]);

  useEffect(() => {
    const search = async () => {
      const result = await axios.get(
        `https://techcrunch.com/wp-json/wp/v2/posts?search=${term}`
      );
      setPosts(result.data);
    };

    if (term && !posts.length) {
      search();
    } else {
      const timerId = setTimeout(search, 10000);

      return () => {
        console.log('This is the return from useEffect');
        clearTimeout(timerId);
      };
    }
  }, [term]);

  return (
    <div className="container mt-3">
      <div>
        <input
          type="text"
          className="form-control"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      {posts.map((post) => (
        <h3 className="mt-3" key={post.id}>
          {post.title.rendered}
        </h3>
      ))}
    </div>
  );
}

export default App;