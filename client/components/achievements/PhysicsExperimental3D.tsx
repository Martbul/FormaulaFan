// Geometry - spere, cube, cylinder...
// Material - the serfice of the geometry
//Combined they make mesh

//! nachina po koito chovek razbira che neshto e 3d e chres svetlina i seni

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

import { F1McLarenModel } from "../3dModels/F1McLarenModel";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  quat,
  vec3,
  euler,
  RapierRigidBody,
} from "@react-three/rapier";
extend({ MeshLineGeometry, MeshLineMaterial });

export default function Experimental3D() {
  return (
    <Canvas className="bg-black" shadows>
      <Suspense>
        <Physics debug gravity={[0, -10, 0]}>
          <Sphere />
          {/* <Cube /> */}
          <McLarenF1 />
          <CuboidCollider position={[0, -2, 0]} args={[200, 0.5, 200]} />

          <EnvironmentAndLiting />
        </Physics>
      </Suspense>
    </Canvas>
  );
}

function EnvironmentAndLiting() {
  return (
    <>
      <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial side={THREE.BackSide} color="#9556c7" />
        </mesh>
      </Environment>
      <ambientLight args={["#ffffff", 0.25]} />

      <spotLight
        args={["#ffffff", 30, 20, angleToRadians(60), 0.2]}
        position={[-3, 1, 0]}
        castShadow
      />
    </>
  );
}
function Sphere() {
  return (
    <>
      <RigidBody
        colliders="hull"
        restitution={1}
        onContactForce={(payload) => {
          console.log("The total force generated was:", payload);
        }}
      >
        <mesh position={[0, 10, 8]} castShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.5}
            roughness={0.6}
          />
        </mesh>
      </RigidBody>
    </>
  );
}

// function Cube() {
//     return (
//       <>
//         <RigidBody
//           colliders="hull"

//           onContactForce={(payload) => {
//             console.log("The total force generated was:", payload);
//           }}
//         >
//           <mesh position={[0, 2, -4]} castShadow>
//             <boxGeometry args={[1, 32, 32]} />
//             <meshStandardMaterial
//               color="#ffffff"
//               metalness={0.5}
//               roughness={0.6}
//             />
//           </mesh>
//         </RigidBody>
//       </>
//     );
// }

function McLarenF1() {
  const rigidBody = useRef<RapierRigidBody>(null);
  const cameraRef = useRef();

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp" && rigidBody.current) {
      // Get the current position and forward direction of the car
      const currentPos = vec3(rigidBody.current.translation());
      const forward = new THREE.Vector3(0, 0, 1);

      // Apply the car's rotation to the forward direction
      forward.applyQuaternion(quat(rigidBody.current.rotation()));

      // Define the speed at which the car should move
      const speed = 0.3;

      // Calculate the new position by adding the forward vector to the current position
      const newPos = currentPos.add(forward.multiplyScalar(speed));

      // Set the new position of the car
      rigidBody.current.setTranslation(newPos, true);
    }

    if (event.key === "ArrowDown" && rigidBody.current) {
      // Get the current position and forward direction of the car
      const currentPos = vec3(rigidBody.current.translation());
      const forward = new THREE.Vector3(0, 0, -1);

      // Apply the car's rotation to the forward direction
      forward.applyQuaternion(quat(rigidBody.current.rotation()));

      // Define the speed at which the car should move
      const speed = 0.3;

      // Calculate the new position by adding the forward vector to the current position
      const newPos = currentPos.add(forward.multiplyScalar(speed));

      // Set the new position of the car
      rigidBody.current.setTranslation(newPos, true);
    }

    if (event.key === "ArrowLeft" && rigidBody.current) {
      const currentRotation = quat(rigidBody.current.rotation());
      const rotationAmount = 0.03; // Adjust this value to control rotation speed
      const eulerRotation = new THREE.Euler(0, rotationAmount, 0, "XYZ");
      const quaternionRotation = new THREE.Quaternion().setFromEuler(
        eulerRotation,
      );
      currentRotation.multiply(quaternionRotation);
      rigidBody.current.setRotation(currentRotation, true);
    }

    if (event.key === "ArrowRight" && rigidBody.current) {
      const currentRotation = quat(rigidBody.current.rotation());
      const rotationAmount = -0.03; // Adjust this value to control rotation speed
      const eulerRotation = new THREE.Euler(0, rotationAmount, 0, "XYZ");
      const quaternionRotation = new THREE.Quaternion().setFromEuler(
        eulerRotation,
      );
      currentRotation.multiply(quaternionRotation);
      rigidBody.current.setRotation(currentRotation, true);
    }
  };

  // Attach the event listener outside of useEffect
  window.addEventListener("keydown", handleKeyDown);

  useEffect(() => {
    if (rigidBody.current) {
      const position = vec3(rigidBody.current.translation());
      const quaternion = quat(rigidBody.current.rotation());
      const eulerRot = euler().setFromQuaternion(
        quat(rigidBody.current.rotation()),
      );

      // Set initial position and rotation
      rigidBody.current.setTranslation(position, true);
      rigidBody.current.setRotation(quaternion, true);
      rigidBody.current.setAngvel({ x: 0, y: 2, z: 0 }, true);
    }
  }, []);

  useFrame(() => {
    if (rigidBody.current && cameraRef.current) {
      const carPosition = vec3(rigidBody.current.translation());
      const carQuaternion = quat(rigidBody.current.rotation());

      // Adjust the camera position and rotation relative to the car's position and orientation
      const cameraOffset = new THREE.Vector3(0, 2, -5); // Offset behind and above the car
      cameraOffset.applyQuaternion(carQuaternion);
      const cameraPosition = carPosition.clone().add(cameraOffset);

      cameraRef.current.position.copy(cameraPosition);

      // Optionally, you can have the camera look at the car
      const lookAtTarget = carPosition.clone().add(new THREE.Vector3(0, 1, 0)); // Target point slightly above the car
      cameraRef.current.lookAt(lookAtTarget);
    }
  });

  return (
    <>
      <RigidBody colliders="trimesh" ref={rigidBody} mass={50}>
        <F1McLarenModel />
      </RigidBody>
      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        fov={75}
        position={[0, 2, -5]} // Initial camera position
      />
    </>
  );
}
