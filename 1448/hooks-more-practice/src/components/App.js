// parameter2: nothing => in every render
// parameter2: [] => in the first render
// parameter2: [var1, var2, ....] => in the first render and when one these variables changes
// Multiple useEffects in one component is possible

import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [term, setTerm] = useState('javascript');
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    console.log('This is useEffect');
    const search = async () => {
      const result = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?search=${term}`);
      setBlogPosts(result.data)
    }

    if(term && !blogPosts.length){
      search();
    } else {
      const timerId = setTimeout(search, 3000);

      return () => {
        console.log('this is return from useEffect');
        clearTimeout(timerId);
      }
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
      <div>
        {blogPosts.map(post => <h3 className='mt-3' key={post.id}>{post.title.rendered}</h3>)}
      </div>
    </div>
  );
}

export default App;
