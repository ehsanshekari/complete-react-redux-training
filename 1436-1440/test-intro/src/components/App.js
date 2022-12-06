import Box from "./Box/Box";
import ClearInput from "./ClearInput/ClearInput";
import Posts from "./Posts/Posts";

function App() {
  return (
    <div className="container mt-3">
      <Box text="Hello World"/>
      <hr />
      <ClearInput />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
