import Counter from './Counter';
import PostsWithThunk from './PostsWithThunk';
import PostsWithRTKQuery from './PostsWithRTKQuery';

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <PostsWithThunk />
      <hr />
       <PostsWithRTKQuery />
    </div>
  );
}

export default App;
