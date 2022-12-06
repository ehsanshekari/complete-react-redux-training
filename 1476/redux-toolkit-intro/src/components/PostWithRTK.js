import React, { useState } from 'react';

import { useGetPostsQuery, useAddPostMutation } from '../services/postsApi';

function PostWithRTK() {
  const [skip, setSkip] = useState(true);
  const { data, error, isLoading, isError, isSuccess } = useGetPostsQuery(null, {
    skip: skip
  });
  // const [addPost] = useAddPostMutation();

  // const onClick = async () => {
  //   const response = await addPost({ title: 'my title2', body: 'my body2' });
  //   console.log('onClick', response.data);
  // };

  const onClick = async () => {
    setSkip(false)
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div>
        {isSuccess && data.map((post) => <h3 key={post.id}>{post.title}</h3>)}
      </div>
      <button onClick={onClick}>FETCH</button>
    </div>
  );
}

export default PostWithRTK;
