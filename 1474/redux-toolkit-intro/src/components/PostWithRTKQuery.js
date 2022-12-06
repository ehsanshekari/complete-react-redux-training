import React, { useState } from 'react';

import {
  usePostsQuery,
  // useAddPostMutation,
  // useDeletePostMutation,
} from '../services/postsApi';

function PostWithRtk() {
  const [skip, setSkip] = useState(true);
  const { data, error, isSuccess, isError, isLoading } = usePostsQuery(null, {
    skip,
  });
  // const [addPost] = useAddPostMutation();
  // const [deletePost] = useDeletePostMutation();

  const onClick = async () => {
    setSkip(false);
    // console.log('PostWithRtk > onClick');
    // await deletePost({id: 1});
  };

  if (isError) return <h3>{error}</h3>;
  if (isLoading) return <h3>LOADING...</h3>;

  return (
    <div>
      <div>
        {isSuccess && data.map((post) => <h3 key={post.id}>{post.title}</h3>)}
      </div>
      <button onClick={onClick}>FETCH POST</button>
    </div>
  );
}

export default PostWithRtk;
