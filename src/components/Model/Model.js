/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model({ props, playing, setPlaying }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/SAMURAI.gltf");
  const { actions } = useAnimations(animations, group);
  // setInterval(() => {
  //   actions["Armature|mixamo.com|Layer0"].paused = true;
  // }, 5000);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerEnter={() => {
        setPlaying(true);
        actions["Armature|mixamo.com|Layer0"].play();
      }}
      onPointerLeave={() => {
        setPlaying(false);
        actions["Armature|mixamo.com|Layer0"].stop();
      }}
    >
      <group name="Scene">
        <group name="Armature" userData={{ name: "Armature" }}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Samurai001"
            geometry={nodes.Samurai001.geometry}
            material={materials.Material}
            skeleton={nodes.Samurai001.skeleton}
            userData={{ name: "Samurai.001" }}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/SAMURAI.gltf");
