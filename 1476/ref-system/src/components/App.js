import {useRef} from 'react';
import myVideo from '../assets/videos/v1.mp4';

const App = () => {
  const videoRef = useRef(null);

  return (
    <div className="container mt-3">
      <video ref={videoRef} width="700" controls>
        <source src={myVideo} type="video/mp4"></source>
      </video>
      <div>
        <button onClick={() => {videoRef.current.play()}}>Play</button>
        <button onClick={() => {videoRef.current.pause()}}>Pause</button>
      </div>
    </div>
  );
};

export default App; // default export
