import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPosts } from '../features/postsSlice';

function PostWithThunk() {
  const { status, data } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(3));
  }, [dispatch]);

  console.log('PostWithThunk > status', status)
  if (status === 'loading') return <p>loading ...</p>;
  if (status === 'error') return <p>{data}</p>;

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
}

export default PostWithThunk;
