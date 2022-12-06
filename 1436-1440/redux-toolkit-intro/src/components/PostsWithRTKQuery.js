import React, { useState } from 'react';

import {
  usePostsQuery,
  // useAddPostMutation,
  // useUpdatePostMutation,
} from '../redux/services/postsApi';

function PostsWithRTKQuery() {
  const [skip, setSkip] = useState(true);
  const { data, error, isLoading, isSuccess, isError } = usePostsQuery(null, {
    skip,
  });
  // const [addPost] = useAddPostMutation();
  // const [updatePost] = useUpdatePostMutation();

  const onButtonClick = async () => {
    setSkip(false);
    // await addPost({
    //   title: 'my new post!',
    //   body: 'ny new post body!',
    // });
    // await updatePost({
    //   id: 3,
    //   title: '!my updated new post',
    //   body: '!my updated new post body',
    // });
  };

  return (
    <div>
      <div>{isLoading && 'Loading...'}</div>
      <div>{isError && error}</div>
      <div>
        {isSuccess &&
          data &&
          data.map((post, i) => <div key={i}>{post.title}</div>)}
      </div>
      <button onClick={onButtonClick}>Click me!</button>
    </div>
  );
}

export default PostsWithRTKQuery;
