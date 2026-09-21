import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { Particles } from "./Particles";

const MouseParallax = () => {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.4 - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-pointer.y * 0.4 - group.current.rotation.x) * 0.05;
    group.current.position.x += (pointer.x * 0.6 - group.current.position.x) * 0.05;
    group.current.position.y += (pointer.y * 0.6 - group.current.position.y) * 0.05;
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.8}>
        <Icosahedron args={[0.9, 1]} position={[-3.5, 0.5, -2]}>
          <meshStandardMaterial
            color="#ff6b1a"
            wireframe
            emissive="#ff6b1a"
            emissiveIntensity={0.4}
            transparent
            opacity={0.55}
          />
        </Icosahedron>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={2.5}>
        <Icosahedron args={[0.4, 0]} position={[3.5, 1.2, -1.5]}>
          <meshStandardMaterial
            color="#ffffff"
            wireframe
            emissive="#ffffff"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </Icosahedron>
      </Float>

      <Float speed={1.8} rotationIntensity={2.2} floatIntensity={2}>
        <Icosahedron args={[0.55, 0]} position={[3.2, -1.6, -2]}>
          <meshStandardMaterial
            color="#ffa04d"
            wireframe
            emissive="#ffa04d"
            emissiveIntensity={0.4}
            transparent
            opacity={0.45}
          />
        </Icosahedron>
      </Float>
    </group>
  );
};

export const Scene = () => (
  <Canvas
    camera={{ position: [0, 0, 6], fov: 70 }}
    style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    dpr={[1, 2]}
  >
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#ff6b1a" intensity={2.5} />
      <pointLight position={[-10, -10, -10]} color="#ffffff" intensity={1.2} />

      <Stars radius={100} depth={50} count={3500} factor={4} fade speed={0.8} />

      <MouseParallax />
      <Particles count={700} />
    </Suspense>
  </Canvas>
);