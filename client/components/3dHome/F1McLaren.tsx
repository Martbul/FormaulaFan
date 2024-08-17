import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Lightformer,
} from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import { angleToRadians } from "../achievements/utils/calculateRadient";
import { F1McLarenModel } from "../3dModels/F1McLarenModel";


extend({ MeshLineGeometry, MeshLineMaterial });

export default function F1McLrean({ scale }) {
  return (
    <Canvas  shadows>
      <Suspense>
        <F1Car scale={scale} />
      </Suspense>
    </Canvas>
  );
}

function F1Car({ scale }) {
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
      <PerspectiveCamera makeDefault position={[0, 20, -10]} fov={80} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(30)}
        maxPolarAngle={angleToRadians(100)}
      />

      <F1McLarenModel
        position={[0, -1, -10]}
        castShadow
        ref={orbitControlsRef}
        scale={scale}
      />

      <Environment background blur={0.75}>
  <color attach="background" args={["rgba(47, 47, 47, 0.2)"]} />  {/* Adjusting the background transparency */}
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
