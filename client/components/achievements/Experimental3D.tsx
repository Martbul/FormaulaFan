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
import gsap from "gsap";
import { F1McLarenModel } from "../3dModels/F1McLarenModel";

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Experimental3D() {
  return (
    <Canvas className="bg-black" shadows>
      <Suspense>
        <Sphere></Sphere>
      </Suspense>
    </Canvas>
  );
}

function Sphere() {
  const orbitControlsRef = useRef(null);

  // executed 60times per second
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      {
        const { x, y } = state.mouse;
        orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
        orbitControlsRef.current.setPolarAngle(
          (y + 1) * angleToRadians(90 - 30),
        );
        orbitControlsRef.current.update();
      }
    }
  });

  //Animation
  const sphereRef = useRef(null);

  useEffect(() => {
    if (!!sphereRef.current) {
      // gsap.to(sphereRef.current.position, {
      //   x: 4,
      //   duration: 2,
      //   ease:"power2.out"
      // });
      const timeline = gsap.timeline({ paused: true });

      timeline.from(sphereRef.current.position, {
        x: 10,
        duration: 3,
        ease: "power2.out",
      });

      timeline.to(
        sphereRef.current.position,
        {
          y: 1,
          duration: 1.4,
          ease: "bounce",
          // }, ">+=0.5")
        },
        "<",
      );

      timeline.play();
    }
  }, [sphereRef.current]);

  return (
    <>
      {/* by default the camera is at 0 0 0, so must change the position */}
      <PerspectiveCamera makeDefault position={[0, 2, 7]} fov={100} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(30)}
        maxPolarAngle={angleToRadians(87)}
      />
      {/* Sphere */}
      <mesh position={[0, 6, 0]} castShadow ref={sphereRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.6} />
      </mesh>
      {/* McLarenF12021 */}
      <F1McLarenModel position={[4, 1, -1]} />
      {/* <F1McLarenModel position={[-10,1,7]}/> */}
      {/* floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#4bace6" />
      </mesh>
      {/* light */}
      //! irl you need light to see an object
      <ambientLight args={["#ffffff", 0.25]} />
      {/* spot light */}
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

//! NON ANIMATED VERSION OF 3D SPHERE!!!
// import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
// import { MeshLineGeometry, MeshLineMaterial } from "meshline";
// import { angleToRadians } from "./utils/calculateRadient";
// import {Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
// import { useEffect, useRef } from "react";
// import * as THREE from "three"
// extend({ MeshLineGeometry, MeshLineMaterial });

// export default function Experimental3D() {
//    return (
//      <Canvas className="bg-black" shadows>
//      <Sphere></Sphere>
//      </Canvas>
//    );
// }

// function Sphere() {

//    const orbitControlsRef = useRef(null)

//    // executed 60times per second
//    useFrame((state) => {
//      if (!!orbitControlsRef.current) {
//        {
//          const { x, y } = state.mouse
//          orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
//          orbitControlsRef.current.setPolarAngle((y + 1 ) * angleToRadians(90 - 30));
//          orbitControlsRef.current.update()
//        }
//      }
//   })

//    return (
//      <>
//        {/* by default the camera is at 0 0 0, so must change the position */}
//        <PerspectiveCamera makeDefault position={[0, 2, 7]} />
//        <OrbitControls
//          ref={orbitControlsRef}
//          minPolarAngle={angleToRadians(30)}
//          maxPolarAngle={angleToRadians(87)}
//        />
//        {/* Sphere */}
//        <mesh position={[0, 1, 0]} castShadow>
//          <sphereGeometry args={[1, 32, 32]} />
//          <meshStandardMaterial color="#ffffff"  metalness={0.5} roughness={0.6}/>
//        </mesh>
//        {/* floor */}
//        <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
//          <planeGeometry args={[40, 40]} />
//          <meshStandardMaterial
//            color="#4bace6"
//          />
//        </mesh>
//        {/* light */}
//        //! irl you need light to see an object
//        <ambientLight args={["#ffffff", 0.25]} />
//        {/* spot light */}
//        <spotLight
//          args={["#ffffff", 10, 20, angleToRadians(60), 0.2]}
//          position={[-4, 1, 0]}
//          castShadow
//        />
//        <Environment background>
//          <mesh scale={100}>
//            <sphereGeometry args={[1, 64, 64]} />
//            <meshBasicMaterial side={THREE.BackSide} color="#9556c7" />
//          </mesh>
//        </Environment>
//      </>
//    );
// }
