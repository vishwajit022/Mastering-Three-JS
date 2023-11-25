import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

function Scene() {
  const cubeRef = useRef();
  const planeRef = useRef();
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });
  return (
    <>
      <OrbitControls />
      <mesh ref={cubeRef} position-x={3}>
        <boxGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
      <mesh ref={cubeRef} position-x={-3}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
}

export default Scene;
