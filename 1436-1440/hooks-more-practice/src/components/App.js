// 1. [] ->  just in the first render
// 2. nothing -> in every render
// 3. [var1, var2, ....] -> in the first render and when one of these values change

import axios from 'axios';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [term, setTerm] = useState('javascript');
  const [blogPosts, setBlogPosts] = useState([]);
  //   const [term2, setTerm2] = useState('php');

//   useEffect(() => {
//       console.log('This is on the first render!')
//   },[]);

  useEffect(() => {
    // console.log('------- LOG FROM USE EFFECT --------');
    const search = async () => {
      const result = await axios.get(
        `https://techcrunch.com/wp-json/wp/v2/posts?search=${term}`
      );
      setBlogPosts(result.data);
    };

    if(term && !blogPosts.length){
        search();
    } else {
        const timerId = setTimeout(search, 1000);
        return () => {
            console.log('log from return function')
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
        {/* <br />
         <input
          type="text"
          className="form-control"
          value={term2}
          onChange={(e) => setTerm2(e.target.value)}
        /> */}
      </div>
      <br />
      <div>{blogPosts.map((post) => <h3 className='mb-5'>{post.title.rendered}</h3>)}</div>
      {/* <br />
      <div>term2: {term2}</div> */}
    </div>
  );
};

export default App;
