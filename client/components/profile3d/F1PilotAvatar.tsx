import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { angleToRadians } from "./utils/calculateRadient";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useEffect, useRef, Suspense } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { F1McLarenModel } from "../3dModels/F1McLarenModel";
import { F1Pilot } from "../3dModels/F1Pilot";

extend({ MeshLineGeometry, MeshLineMaterial });

export default function F1PilotAvatar() {
  return (
    <Canvas className="bg-black" shadows>
      <Suspense>
        <F1PilotAvata/>
      </Suspense>
    </Canvas>
  );
}

function F1PilotAvata() {
  const orbitControlsRef = useRef(null);

  // executed 60times per second
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
      orbitControlsRef.current.setPolarAngle(
        (y + 1) * angleToRadians(100)
      );
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
     
      <F1Pilot position={[0, -1, -2]} castShadow ref={orbitControlsRef}/>

      <ambientLight args={["#ffffff", 0.25]} />
      {/* Spot light */}
      <spotLight
        args={["#ffffff", 30, 20, angleToRadians(60), 0.2]}
        position={[-3, 1, 0]}
        castShadow
      />
      <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial side={THREE.BackSide} color="#9556c7" />
        </mesh>
      </Environment>
    </>
  );
}
