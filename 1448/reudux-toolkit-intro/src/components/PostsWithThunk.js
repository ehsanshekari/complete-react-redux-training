import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/postsSlice';

const PostsWithThunk = () => {
  const {status, data} = useSelector(store => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(5));
  }, [dispatch])

  if(status === 'loading') return 'loading...';
  if(status === 'failed') return <h3>{data}</h3>;
  
  return data.map((post) => <div key={post.id}>{post.title}</div>)
}

export default PostsWithThunk;