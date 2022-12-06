import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPostList } from '../store/action-creators/posts';

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(fetchPostList());
  }, [dispatch]);

  return (
    <div className="container mt-3">
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
};

export default App;
