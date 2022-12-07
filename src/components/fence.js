import { useGLTF } from '@react-three/drei';

export function FenceVictorian(props) {
    const { nodes, materials } = useGLTF('fence_victorian/scene.gltf')
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
  
