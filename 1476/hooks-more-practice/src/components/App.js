// [] => first render
// nothing => every render
// [var1, var2, ...] => in the first render and when one of this variables changes

import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [term, setTerm] = useState('javascript');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const search = async () => {
      const response = await axios.get(
        `https://techcrunch.com/wp-json/wp/v2/posts?search=${term}`
      );
      setPosts(response.data);
    };

    if(term && !posts.length){
      search();
    } else {
      
    }
    const timer = setTimeout(search, 3000);

    return () => {
      console.log('This is the return function of useEffect hook');
      clearTimeout(timer)
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
      <div className="mt-3">
        <h3>Posts:</h3>
        {posts.map((post) => (
          <h3 key={post.id} className="mt-3">{post.title.rendered}</h3>
        ))}
      </div>
    </div>
  );
}

export default App;
