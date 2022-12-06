import React, { useState } from 'react';

// CRUD => READ(ALL, WITH ID), CREATE

import {
  usePostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
} from '../services/postsApi';

function PostsWithRTKQuery() {
  const [skip, setSkip] = useState(true);
  const { data, error, isLoading, isSuccess, isError } = usePostsQuery(null, {
    skip,
  });
  // const [addPost] = useAddPostMutation();
  // const [updatePost] = useUpdatePostMutation();

  const handleClick = async () => {
    setSkip(false);
    // const response = await addPost({ title: 'my posts', body: 'new body' });
    // console.log(response.data);
  };

  return (
    <div>
      <div>{isLoading && 'Loading...'}</div>
      <div>{isError && error}</div>
      <div>
        {isSuccess &&
          data &&
          data.map((post) => <h3 key={post.id}>{post.title}</h3>)}
      </div>
      <button onClick={handleClick}>Test Mutation</button>
    </div>
  );
}

export default PostsWithRTKQuery;
