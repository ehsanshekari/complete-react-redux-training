import 'bootstrap/dist/css/bootstrap.min.css';

import Counter from './Counter';
import PostsWithThunk from './PostsWithThunk';
import PostsWithRTKQuery from './PostsWithRTKQuery';

const App = () => {
  
  return (
    <div className="container mt-3">
      <Counter />
      <hr />
      <PostsWithThunk />
      <hr />
      <PostsWithRTKQuery />
    </div>
  );
};

export default App;
