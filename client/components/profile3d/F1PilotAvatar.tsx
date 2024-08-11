import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { angleToRadians } from "./utils/calculateRadient";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Lightformer,
} from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

import { F1Pilot } from "../3dModels/F1Pilot";

extend({ MeshLineGeometry, MeshLineMaterial });

export default function F1PilotAvatar({ avatarColors }) {
  return (
    <Canvas className="bg-black" shadows>
      <Suspense>
        <F1PilotAvata avatarColors={avatarColors} />
      </Suspense>
    </Canvas>
  );
}

function F1PilotAvata({ avatarColors }) {
  const orbitControlsRef = useRef(null);

  // executed 60times per second
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(100));
      orbitControlsRef.current.update();
    }
  });

  return (
    <>
      {/* By default, the camera is at [0, 0, 0], so we must change the position */}
      <PerspectiveCamera makeDefault position={[0, 20, -2]} fov={100} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(30)}
        maxPolarAngle={angleToRadians(100)}
      />

      <F1Pilot
        position={[0, -1, -2]}
        castShadow
        ref={orbitControlsRef}
        avatarColors={avatarColors}
      />

      <Environment background blur={0.75}>
        <color attach="background" args={["#2f2f2f"]} />
        <Lightformer
          intensity={20}
          color="white"
          position={[0, -1, 60]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={30}
          color="white"
          position={[-1, -1, 70]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={300}
          color="white"
          position={[1, 1, 70]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={20}
          color="white"
          position={[-10, 0, 45]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </>
  );
}
