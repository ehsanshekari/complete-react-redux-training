import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPosts } from '../features/postsSlice';

function PostWithThunk() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(fetchPosts(4));
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>{data}</p>;
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
}

export default PostWithThunk;
