/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import './index.css';
import Dashboard from './components/Dashboard/dashboard';
import Welcome from './components/Welcome/Welcome';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { ScrollControls, useScroll, Scroll } from '@react-three/drei';

function AnimatedCircle({ setBgColor }) {
  const circleRef = [useRef(), useRef()];
  const scrollData = useScroll();
  // #e3e3e3
  useFrame(() => {
    const scrollOffset = scrollData.offset;
    if (scrollOffset < 0.25) {
      setBgColor('#fff');
    } else if (scrollOffset < 12) {
      setBgColor('#e3cc78');
    } else if (scrollOffset < 13) {
      setBgColor('orange');
    } else 'lightgreen';
    circleRef.forEach((circleRef, index) => {
      const scale = 1 + scrollOffset * (2 + index);
      const offsetY = -scrollOffset * (2 + index);
      circleRef.current.position.y = offsetY;
      circleRef.current.scale.set(scale, scale, 1);
    });
  });
  return (
    <>
      <ambientLight intensity={4} />
      <directionalLight intensity={3} position={[5, 5, 5]} />
      <mesh ref={circleRef[0]} position={[5, 70, -11]}>
        <circleGeometry args={[5, 64]} />
        <meshBasicMaterial color='pink' />
      </mesh>
      <mesh ref={circleRef[1]} position={[-10, 20, -10]}>
        <circleGeometry args={[12, 64]} />
        <meshBasicMaterial color='#f9c74f' />
      </mesh>
    </>
  );
}
function App() {
  const [bgColor, setBgColor] = useState('#fff');
  return (
    <div
      style={{
        backgroundColor: bgColor,
        transition: 'background-color: 0.2s',
      }}
    >
      <Canvas className='h-dvh' camera={{ position: [0, 0, 10] }}>
        <ScrollControls pages={1} damping={0.5}>
          <Scroll>
            <AnimatedCircle setBgColor={setBgColor} bgColor={bgColor} />
          </Scroll>
        </ScrollControls>
        <Welcome />
      </Canvas>
      <Dashboard />
    </div>
  );
}

export default App;
