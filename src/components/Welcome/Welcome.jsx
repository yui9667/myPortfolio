import './Welcome.css';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useRef } from 'react';

const Welcome = () => {
  const textRef = useRef();
  const scaleFactor = useRef(1);

  useFrame(() => {
    if (textRef.current.position.y > -1) {
      textRef.current.position.y -= 0.2;
      scaleFactor.current += 0.02;
      textRef.current.scale.set(1, scaleFactor.current, 1);
    }
  });
  return (
    <>
      <Text
        ref={textRef}
        position={[0, 5, 0]}
        fontSize={1}
        color='black'
        anchorX='center'
        anchorY='middle'
      >
        YUI JENSEN
      </Text>
    </>
  );
};
export default Welcome;
