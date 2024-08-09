import React from 'react'
import { useGLTF } from '@react-three/drei'

export function F1Pilot(props) {
  const { nodes, materials } = useGLTF('/models/f1Pilot/f1Pilot-transformed.glb')
  return (
    <group {...props} dispose={null}  scale={8}>
      <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.RT_DRIVER_Face} position={[0, 1.581, 0.213]} scale={2.311} />
      <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.RT_Helemt_trasparent} position={[0, 1.581, 0.213]} scale={2.311} />
      <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.RT_HELMET_Glass} position={[0, 1.581, 0.213]} scale={2.311} />
      <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials.RT_Gloves} position={[0.973, 0.042, 0.235]} scale={2.311} />
      <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials.RT_DriverSuit} position={[0, -0.612, -0.499]} scale={2.311} />
      <mesh castShadow receiveShadow geometry={nodes.Object_28.geometry} material={materials.RT_HANS} position={[0, 0.935, 0.192]} rotation={[-0.024, 0, 0]} scale={2.311} />
    </group>
  )
}

useGLTF.preload('/models/f1Pilot/f1Pilot-transformed.glb')
