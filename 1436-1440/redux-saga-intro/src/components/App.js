import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostList } from '../store/action-creators';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(fetchPostList());
  }, [dispatch]);

  return (
    <div className="App">
      APP
      {posts.map((post) => (
        <h3>{post.title}</h3>
      ))}
    </div>
  );
}

export default App;
