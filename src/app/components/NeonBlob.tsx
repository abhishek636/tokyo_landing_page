// NeonBlob.tsx
"use client";
import * as THREE from "three";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { useRef } from "react";

// GLSL shaders
const BlobMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorA: new THREE.Color("#04179f"), // Deep blue
    uColorB: new THREE.Color("#ff00ffff"), // Magenta
  },
  // Vertex Shader
  `
    uniform float uTime;
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vNormal = normal;
      vPosition = position;

      // Organic distortion using sin noise
      float distortion = 0.3 * sin(uTime + position.y * 3.0) * cos(uTime * 0.5 + position.x * 2.0);
      vec3 newPosition = position + normal * distortion;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      // Gradient blend
      float grad = (vPosition.y + 1.0) * 0.5;
      vec3 color = mix(uColorB,uColorA, grad);

      // Rim lighting (edge glow)
      float rim = 1.0 - max(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 0.0);
      rim = pow(rim, 2.5); // softness
      vec3 glow = vec3(1.0, 0.2, 1.0) * rim * 1.5; // neon magenta glow

      gl_FragColor = vec4(color + glow, 1.0);
    }
  `
);

extend({ BlobMaterial });

// Type declaration for the custom material
declare module "@react-three/fiber" {
  interface ThreeElements {
    blobMaterial: any;
  }
}

function Blob() {
  const ref = useRef<any>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.uTime = clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <icosahedronGeometry args={[1.2, 64]} />
      <blobMaterial ref={ref} />
    </mesh>
  );
}

export default function NeonBlob() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Blob />
      </Canvas>
    </div>
  );
}