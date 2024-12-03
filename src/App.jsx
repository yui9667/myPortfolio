import './index.css';
//import Dashboard from './components/Dashboard/dashboard';
import Welcome from './components/Welcome/Welcome';

import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div>
      <Canvas className='h-dvh'>
        <ambientLight />
        <pointLight />

        <Welcome />
      </Canvas>
      {/* /* <Dashboard /> */}
    </div>
  );
}

export default App;
