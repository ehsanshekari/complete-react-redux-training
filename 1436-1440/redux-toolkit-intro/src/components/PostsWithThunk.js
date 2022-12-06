import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../redux/features/postsSlice';

const PostsWithThunk = () => {
  const { status, data } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(3));
  }, [dispatch]);

  if (status === 'loading') return <h3>loading</h3>;
  if (status === 'failed') return <h3>{data}</h3>;
  return data.map((post) => <div>{post.title}</div>);
};

export default PostsWithThunk;
