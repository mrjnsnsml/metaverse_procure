import { useGLTF } from '@react-three/drei';


export function TudorResidence(props) {
    const { nodes, materials } = useGLTF('tudorresidence/scene.gltf')
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-1.41, 3.79, 3.68]}>
              <mesh geometry={nodes.Object_4.geometry} material={materials.Darkwood} />
              <mesh geometry={nodes.Object_5.geometry} material={materials['Material.081']} />
              <mesh geometry={nodes.Object_6.geometry} material={materials['Material.082']} />
              <mesh geometry={nodes.Object_7.geometry} material={materials['Material.083']} />
              <mesh geometry={nodes.Object_8.geometry} material={materials['Material.084']} />
              <mesh geometry={nodes.Object_9.geometry} material={materials.Roofing} />
            </group>
          </group>
        </group>
      </group>
    )
  }
