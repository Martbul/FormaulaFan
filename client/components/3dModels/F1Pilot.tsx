import React from "react";
import { useGLTF } from "@react-three/drei";

export function F1Pilot({ avatarColors, props }) {
  console.log("avatarColors", avatarColors);
  const { materials: manyMaterials } = useGLTF(
    "/models/f1Pilot/f1Pilot-transformed.glb",
  );
  const { nodes, materials: redMaterials } = useGLTF(
    "/models/f1PilotBlueHelmet/pilotBlueHelmet-transformed.glb",
  );
  const { materials: greenMaterial } = useGLTF(
    "/models/f1GreenPilot/greenPilot.glb",
  );

  const { materials: blackMaterial } = useGLTF(
    "/models/f1BlackPilot/blackPilot.glb",
  );

  const { materials: whiteMaterial } = useGLTF(
    "/models/f1WhitePilot/f1WhitePilot.glb",
  );

  const { materials: pinkMaterial } = useGLTF(
    "/models/f1PinkPilot/f1PinkPilot.glb",
  );

  const { materials: blueMaterial } = useGLTF(
    "/models/f1BluePilot/f1BluePilot.glb",
  );
  // const materials = {...blueMaterials,...redMaterials, ...greenMaterial,...blackMaterial }
  const materials = {
    blueMaterial,
    redMaterials,
    greenMaterial,
    blackMaterial,
    whiteMaterial,
    pinkMaterial,
    manyMaterials,
  };
  console.log("materials", materials);

  return (
    <group {...props} dispose={null} scale={8}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={blueMaterial.RT_DRIVER_Face}
        position={[0, 1.581, 0.213]}
        scale={2.311}
      />
      <Helmet nodes={nodes} materials={materials} avatarColors={avatarColors} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={blackMaterial.RT_HELMET_Glass}
        position={[0, 1.581, 0.213]}
        scale={2.311}
      />

      <Gloves nodes={nodes} materials={materials} avatarColors={avatarColors} />

      <Suit nodes={nodes} materials={materials} avatarColors={avatarColors} />

      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={blueMaterials.RT_HANS}
        position={[0, 0.935, 0.192]}
        rotation={[-0.024, 0, 0]}
        scale={2.311}
      /> */}
    </group>
  );
}

function Helmet({ nodes, materials, avatarColors }) {
  let materialHelmetColor;
  if (avatarColors.helmetColor === "Black") {
    materialHelmetColor = materials.blackMaterial;
  } else if (avatarColors.helmetColor === "Green") {
    materialHelmetColor = materials.greenMaterial;
  } else if (avatarColors.helmetColor === "Red") {
    materialHelmetColor = materials.manyMaterials;
  } else if (avatarColors.helmetColor === "Blue") {
    materialHelmetColor = materials.redMaterials;
  } else if (avatarColors.helmetColor === "White") {
    materialHelmetColor = materials.whiteMaterial;
  } else if (avatarColors.helmetColor === "Pink") {
    materialHelmetColor = materials.pinkMaterial;
  }

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_6.geometry}
      material={materialHelmetColor?.RT_Helemt_trasparent}
      position={[0, 1.581, 0.213]}
      scale={2.311}
    />
  );
}

function Suit({ nodes, materials, avatarColors }) {
  let materialSuitColor;
  if (avatarColors.suitColor === "Black") {
    materialSuitColor = materials.blackMaterial;
  } else if (avatarColors.suitColor === "Green") {
    materialSuitColor = materials.greenMaterial;
  } else if (avatarColors.suitColor === "Red") {
    materialSuitColor = materials.redMaterials;
  } else if (avatarColors.suitColor === "Blue") {
    materialSuitColor = materials.blueMaterial;
  } else if (avatarColors.suitColor === "White") {
    materialSuitColor = materials.whiteMaterial;
  } else if (avatarColors.suitColor === "Pink") {
    materialSuitColor = materials.pinkMaterial;
  }

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_16.geometry}
      material={materialSuitColor?.RT_DriverSuit}
      position={[0, -0.612, -0.499]}
      scale={2.311}
    />
  );
}

function Gloves({ nodes, materials, avatarColors }) {
  let materialGlovesColor;
  if (avatarColors.glovesColor === "Black") {
    materialGlovesColor = materials.blackMaterial;
  } else if (avatarColors.glovesColor === "Green") {
    materialGlovesColor = materials.greenMaterial;
  } else if (avatarColors.glovesColor === "Red") {
    materialGlovesColor = materials.redMaterials;
  } else if (avatarColors.glovesColor === "Blue") {
    materialGlovesColor = materials.blueMaterial;
  } else if (avatarColors.glovesColor === "White") {
    materialGlovesColor = materials.whiteMaterial;
  } else if (avatarColors.glovesColor === "Pink") {
    materialGlovesColor = materials.pinkMaterial;
  }

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_14.geometry}
      material={materialGlovesColor.RT_Gloves}
      position={[0.973, 0.042, 0.235]}
      scale={2.311}
    />
  );
}

useGLTF.preload("/models/f1Pilot/f1Pilot-transformed.glb");
