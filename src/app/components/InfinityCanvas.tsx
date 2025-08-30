"use client";

import * as THREE from "three";
import React, { useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

interface InfinityCanvasProps {
  rotation?: [number, number, number];
  position?: [number, number, number];
  scale?: number;
}

export default function InfinityCanvas({
  rotation = [0.4, 0.4, 0.4],
  position = [0, 0, 0],
  scale = 1.2,
}: InfinityCanvasProps) {
  return (
    <Canvas
      camera={{ position: [2, 4, 14], fov: 45 }}
      gl={{
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true,
      }}
      style={{ background: "transparent" }}
      dpr={[1, 2]}
    >
      <Scene rotation={rotation} position={position} scale={scale} />
    </Canvas>
  );
}

function Scene({
  rotation,
  position,
  scale,
}: {
  rotation: [number, number, number];
  position: [number, number, number];
  scale: number;
}) {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <FlowingInfinityTube rotation={rotation} position={position} scale={scale} />
    </>
  );
}

function FlowingInfinityTube({
  rotation,
  position,
  scale,
}: {
  rotation: [number, number, number];
  position: [number, number, number];
  scale: number;
}) {
  const curve = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segs = 800;
    const s = 4;
    for (let i = 0; i <= segs; i++) {
      const t = (i / segs) * Math.PI * 2;
      const x = s * Math.sin(t);
      const y = s * Math.sin(t) * Math.cos(t);
      pts.push(new THREE.Vector3(x, y, 0));
    }
    return new THREE.CatmullRomCurve3(pts, true);
  }, []);

  const tubeRadius = 0.35;
  const glass = useMemo(
    () => new THREE.TubeGeometry(curve, 1200, tubeRadius, 48, true),
    [] // ✅ removed `curve` to fix ESLint warning
  );

  const particleCount = 3000;
  const particlesGeo = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const u0 = new Float32Array(particleCount);
    const r = new Float32Array(particleCount);
    const phi = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color("#2dd4ff");
    const c2 = new THREE.Color("#3b82f6");
    const c3 = new THREE.Color("#60a5fa");

    for (let i = 0; i < particleCount; i++) {
      u0[i] = Math.random();
      r[i] = (Math.random() ** 1.2) * tubeRadius * 0.6;
      phi[i] = Math.random() * Math.PI * 2;

      const t = u0[i];
      const mixed = c1
        .clone()
        .lerp(c2, (Math.sin(t * Math.PI * 2) + 1) / 2)
        .lerp(c3, t * 0.5);
      colors.set([mixed.r, mixed.g, mixed.b], i * 3);
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("u0", new THREE.BufferAttribute(u0, 1));
    g.setAttribute("r", new THREE.BufferAttribute(r, 1));
    g.setAttribute("phi", new THREE.BufferAttribute(phi, 1));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return g;
  }, [curve]);

  const tmpP = useMemo(() => new THREE.Vector3(), []);
  const tmpT = useMemo(() => new THREE.Vector3(), []);
  const n = useMemo(() => new THREE.Vector3(), []);
  const b = useMemo(() => new THREE.Vector3(), []);
  const upY = useMemo(() => new THREE.Vector3(0, 1, 0), []);
  const upX = useMemo(() => new THREE.Vector3(1, 0, 0), []);

  useFrame(({ clock }) => {
    const tNow = clock.getElapsedTime();
    const speed = 0.12;
    const swirl = 1.8;
    const pos = particlesGeo.attributes.position.array as Float32Array;
    const u0 = particlesGeo.attributes.u0.array as Float32Array;
    const r = particlesGeo.attributes.r.array as Float32Array;
    const phi = particlesGeo.attributes.phi.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const u = (u0[i] + tNow * speed) % 1;
      curve.getPointAt(u, tmpP);
      curve.getTangentAt(u, tmpT).normalize();

      const ref = Math.abs(tmpT.y) < 0.9 ? upY : upX;
      n.copy(ref).cross(tmpT).normalize();
      b.copy(tmpT).cross(n).normalize();

      const ang = phi[i] + tNow * swirl;
      const offX = Math.cos(ang) * r[i];
      const offY = Math.sin(ang) * r[i];

      pos[i * 3 + 0] = tmpP.x + n.x * offX + b.x * offY;
      pos[i * 3 + 1] = tmpP.y + n.y * offX + b.y * offY;
      pos[i * 3 + 2] = tmpP.z + n.z * offX + b.z * offY;
    }

    particlesGeo.attributes.position.needsUpdate = true;
  });

  return (
    <group rotation={rotation} position={position} scale={scale}>
      <points geometry={particlesGeo}>
        <pointsMaterial
          size={0.1}
          vertexColors
          transparent
          opacity={0.98}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>

      <mesh geometry={glass}>
        <meshPhysicalMaterial
          color={"#3b82f6"}
          transmission={1}
          thickness={0.5}
          roughness={0.08}
          metalness={0.05}
          clearcoat={1}
          ior={1.4}
          side={THREE.DoubleSide}
          transparent
          opacity={0.3}
          depthWrite={false}
          envMapIntensity={1.8}
        />
      </mesh>
    </group>
  );
}
