// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import Counter from './Counter';
import ColorInput from './ColorInput';

function App() {
  const color = useSelector(store => store.color)
  return (
    <div>
      <p style={{ color: color }}>
        This is a Paragraph with color {color}
      </p>
      <Counter />
      <hr />
      <ColorInput />
    </div>
  );
}

export default App;

// const mapsStateToProps = (state) => {
//   return { color: state.color };
// };

// export default connect(mapsStateToProps)(App);
