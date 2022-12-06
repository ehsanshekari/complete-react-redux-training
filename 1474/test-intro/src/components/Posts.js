import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=3'
      );
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post, i) => (
        <div key={post.id} className="mt-3" data-testid={`post-${i}`}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
