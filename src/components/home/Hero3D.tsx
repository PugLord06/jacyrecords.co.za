"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Scanline, Glitch } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

function HologramHead() {
  const meshRef = useRef<THREE.Group>(null);
  
  // Load the OBJ file we downloaded
  const obj = useLoader(OBJLoader, "/head.obj");
  
  // Create a glowing wireframe material
  const material = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color("#7b2cbf").multiplyScalar(2), // Jacy purple multiplied for bloom
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
  }, []);

  // Apply the material to all meshes in the OBJ
  useMemo(() => {
    obj.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = material;
      }
    });
  }, [obj, material]);

  // Animate: slow rotation and slight bobbing
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
      
      // Slight parallax based on mouse
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        (state.mouse.y * Math.PI) / 10,
        0.05
      );
      meshRef.current.rotation.y += THREE.MathUtils.lerp(
        0,
        (state.mouse.x * Math.PI) / 10,
        0.05
      );
    }
  });

  return (
    <group ref={meshRef}>
      <Center>
        {/* Scale reduced based on feedback */}
        <primitive object={obj} scale={0.05} />
      </Center>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        
        <HologramHead />

        {/* Post-processing for the Hologram Glow effect */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.2}
            mipmapBlur
            intensity={2.5}
            radius={0.8}
          />
          <Noise opacity={0.15} />
          <Scanline density={2.5} opacity={0.2} />
          <Glitch
            delay={[5.0, 10.0] as any} // min, max delay (less frequent)
            duration={[0.1, 0.2] as any} // min, max duration (shorter flashes)
            strength={[0.02, 0.08] as any} // min, max strength (much more subtle)
            active
            ratio={0.15}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
