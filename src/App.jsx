import './index.css';
import Dashboard from './components/Dashboard/dashboard';
import Welcome from './components/Welcome/Welcome';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { ScrollControls, useScroll, Scroll } from '@react-three/drei';
function AnimatedBox() {
  const circleRef = useRef();
  const scrollData = useScroll();
  useFrame(() => {
    const scrollOffset = scrollData.offset;
    const scale = 1 + scrollOffset * 2;
    circleRef.current.position.y = -scrollOffset * 2;
    circleRef.current.scale.set(scale, scale, 1);
  });
  return (
    <>
      <mesh ref={circleRef} position={(2, 10, 4)}>
        <circleGeometry args={[3, 64]} />
        <meshBasicMaterial color='lightgreen' />
      </mesh>
      <mesh ref={circleRef} position={(9, 30, -12)}>
        <circleGeometry args={[10, 64]} />
        <meshBasicMaterial color='pink' />
      </mesh>
    </>
  );
}
function App() {
  return (
    <div>
      <Canvas className='h-dvh' camera={{ position: [0, 0, 10] }}>
        <ambientLight />
        <pointLight />
        <ScrollControls pages={2} damping={0.5}>
          <Scroll>
            <AnimatedBox />
            <Welcome />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Dashboard />
    </div>
  );
}

export default App;
