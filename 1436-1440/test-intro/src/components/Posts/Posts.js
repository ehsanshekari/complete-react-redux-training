import { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=3'
      );
      setPosts(result.data);
    };

    fetchPosts();
  });

  return (
    <div>
      {posts.map((post, index) => (
        <div key={post.id} className="mt-3" data-testid={`post-${index}`}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
