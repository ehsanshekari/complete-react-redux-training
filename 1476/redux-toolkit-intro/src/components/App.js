import Counter from "./Counter";
import PostWithRTK from "./PostWithRTK";
import PostWithThunk from "./PostWithThunk";

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <PostWithThunk />
      <hr />
      <hr />
      <PostWithRTK />
    </div>
  );
}

export default App;
