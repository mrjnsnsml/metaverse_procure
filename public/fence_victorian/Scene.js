/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: BiscuitEater (https://sketchfab.com/div.andromeda)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/stylized-victorian-fence-d149368ceb094d12a865925c79d9d31b
title: Stylized Victorian Fence
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1.68, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Fence_01_Canal_LOD0_Fence_01_Main_0.geometry} material={materials.Fence_01_Main} />
          </group>
          <group position={[-6.57, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <mesh geometry={nodes.Fence_01_Canal_LOD0001_Fence_01_Main_0.geometry} material={materials.Fence_01_Main} />
          </group>
          <group position={[0.36, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Fence_01_Pillar_LOD0_Fence_01_End_0.geometry} material={materials.Fence_01_End} />
          </group>
          <group position={[-5.25, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <mesh geometry={nodes.Fence_01_Pillar_LOD0001_Fence_01_End_0.geometry} material={materials.Fence_01_End} />
          </group>
          <group position={[2.96, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Fence_01_PillarSmall_Fence_01_End_0.geometry} material={materials.Fence_01_End} />
          </group>
          <group position={[2.96, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Fence_01_Pole_LOD0_Fence_01_End_0.geometry} material={materials.Fence_01_End} />
          </group>
          <group position={[-7.84, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <mesh geometry={nodes.Fence_01_PillarSmall001_Fence_01_End_0.geometry} material={materials.Fence_01_End} />
          </group>
          <group position={[-7.84, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <mesh geometry={nodes.Fence_01_Pole_LOD0001_Fence_01_End_0.geometry} material={materials.Fence_01_End} />
          </group>
          <group position={[-1.11, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Fence_01_Gate_LOD0_Fence_01_Gate_0.geometry} material={materials.Fence_01_Gate} />
          </group>
          <group position={[-3.77, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <mesh geometry={nodes.Fence_01_Gate_LOD0001_Fence_01_Gate_0.geometry} material={materials.Fence_01_Gate} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
