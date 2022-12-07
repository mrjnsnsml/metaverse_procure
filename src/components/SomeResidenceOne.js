import { useGLTF } from '@react-three/drei';


export function SomeResidenceOne(props) {
    const { nodes, materials } = useGLTF('someresidence1/scene.gltf')
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group position={[-523.42, 385.16, 449.35]}>
              <mesh geometry={nodes.polySurface24_lambert5_0.geometry} material={materials.lambert5} />
              <mesh geometry={nodes.polySurface60_lambert5_0.geometry} material={materials.lambert5} />
              <mesh geometry={nodes.polySurface61_lambert5_0.geometry} material={materials.lambert5} />
              <mesh geometry={nodes.polySurface27_lambert5_0.geometry} material={materials.lambert5} />
              <mesh geometry={nodes.polySurface55_lambert5_0.geometry} material={materials.lambert5} />
              <group position={[49.89, 0, -286.57]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh geometry={nodes.polySurface56_lambert5_0.geometry} material={materials.lambert5} />
              </group>
              <group position={[49.89, 0, -286.57]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh geometry={nodes.polySurface57_lambert5_0.geometry} material={materials.lambert5} />
              </group>
              <group position={[0, 337.6, 0]}>
                <mesh geometry={nodes.polySurface52_lambert5_0.geometry} material={materials.lambert5} />
              </group>
              <mesh geometry={nodes.polySurface54_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-192.88, 717.34, 1095.07]} scale={1.84}>
              <mesh geometry={nodes.pCube7_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-102.15, 64.63, -137.09]}>
              <mesh geometry={nodes.pCube8_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-102.15, 408.89, -137.09]} scale={[1, 0.23, 1]}>
              <mesh geometry={nodes.pCube9_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-102.15, 64.63, -290.7]}>
              <mesh geometry={nodes.pCube10_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-102.15, 64.63, -593.89]}>
              <mesh geometry={nodes.pCube11_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-36.26, 98.57, -639.11]} scale={[0.6, 0.26, 1.31]}>
              <mesh geometry={nodes.pCube12_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-416.19, 1116.19, 307.48]} scale={[1.84, 0.24, 0.66]}>
              <mesh geometry={nodes.pCube31_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-928, -38.55, -1354.27]}>
              <mesh geometry={nodes.polySurface47_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[544.73, 0, 1064.74]} rotation={[0, -Math.PI / 2, 0]} scale={[0.48, 1, 0.65]}>
              <mesh geometry={nodes.polySurface68_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-205.87, 1283.16, 307.48]} rotation={[0, Math.PI / 2, 0]} scale={1.84}>
              <mesh geometry={nodes.pCube92_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-783.2, 1283.16, 307.48]} rotation={[0, -Math.PI / 2, 0]} scale={1.84}>
              <mesh geometry={nodes.pCube93_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[612.32, 0, -784.95]} rotation={[0, Math.PI / 2, 0]}>
              <group position={[0, 17.25, -25.89]} rotation={[-0.02, 0, 0]}>
                <mesh geometry={nodes.polySurface85_lambert5_0.geometry} material={materials.lambert5} />
              </group>
              <group position={[-327.1, 0, -52.47]}>
                <mesh geometry={nodes.polySurface86_lambert5_0.geometry} material={materials.lambert5} />
              </group>
            </group>
            <group position={[-665.77, -64.24, -155.21]}>
              <mesh geometry={nodes.polySurface106_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-605.29, 0, -533.28]}>
              <mesh geometry={nodes.polySurface107_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[517.35, -64.24, -59.51]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface108_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-308.65, -64.24, -155.21]} scale={[-1, 1, 1]}>
              <mesh geometry={nodes.polySurface109_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-605.29, 0, -862.57]}>
              <mesh geometry={nodes.polySurface110_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-598.04, 323.13, -583.04]}>
              <mesh geometry={nodes.polySurface111_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-598.04, 323.13, -812.59]}>
              <mesh geometry={nodes.polySurface112_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-395.6, 323.13, 1200.43]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh geometry={nodes.polySurface113_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-395.6, 323.13, 1429.98]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh geometry={nodes.polySurface114_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-387.5, 0, 1150.46]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh geometry={nodes.polySurface115_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-387.5, 0, 1479.74]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh geometry={nodes.polySurface116_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-194.29, 0, 759.84]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh geometry={nodes.polySurface118_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-1696.32, 0, 138.89]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface119_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-1441.54, 0, 138.89]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface120_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-1577.65, 300.98, 140.28]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.polySurface121_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[297.01, 239.17, -224.65]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube97_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[135.33, 239.17, -500.17]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube98_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[297.01, 239.17, -5.77]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube99_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[157.82, 239.17, -224.65]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube100_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[7.55, 239.17, -224.65]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube101_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[7.55, 239.17, -500.16]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube102_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[297.01, 221.48, -134.41]} rotation={[Math.PI / 2, 0, 0]} scale={[0.3, 1.63, 0.3]}>
              <mesh geometry={nodes.pCube103_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-14.79, 221.48, 29.04]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.3, 1.05, 0.3]}>
              <mesh geometry={nodes.pCube104_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[297.01, 239.17, -40.16]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube105_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[297.01, 239.17, -65.82]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube106_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[297.01, 239.17, -118.93]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube107_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[297.01, 239.17, -91.89]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube108_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[297.01, 239.17, -195.91]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube109_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[297.01, 239.17, -170.25]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube110_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[297.01, 239.17, -144.96]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube112_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[11.72, 239.6, -478.74]} rotation={[0, Math.PI / 2, 0]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube113_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-13.67, 239.6, -478.74]} rotation={[0, Math.PI / 2, 0]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube114_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-40.34, 239.6, -478.74]} rotation={[0, Math.PI / 2, 0]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube115_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-67.66, 239.6, -478.74]} rotation={[0, Math.PI / 2, 0]} scale={[0.3, 1.95, 0.3]}>
              <mesh geometry={nodes.pCube116_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[794.2, 138.86, 1576.58]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 0.29]}>
              <mesh geometry={nodes.pPlane1_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[609.97, 138.86, 1826.67]} rotation={[-Math.PI / 2, 0, -0.27]} scale={[1, 1, 0.29]}>
              <mesh geometry={nodes.pPlane2_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[914.82, 138.86, 1365.76]} rotation={[-Math.PI / 2, 0, 0.2]} scale={[1, 1, 0.29]}>
              <mesh geometry={nodes.pPlane3_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[844.16, 168.76, 1576.58]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 0.29]}>
              <mesh geometry={nodes.pPlane4_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[721.62, 436.47, 1570.95]} rotation={[-1.63, -0.2, -0.01]} scale={[1, 1, 0.29]}>
              <mesh geometry={nodes.pPlane5_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[659.76, -146.6, 1747.04]} rotation={[-1.39, 0.21, -0.21]} scale={[1, 1, 0.29]}>
              <mesh geometry={nodes.pPlane6_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[949.65, 233.32, 1143.03]} rotation={[-Math.PI / 2, 0, 0.41]} scale={[1, 1, 0.29]}>
              <mesh geometry={nodes.pPlane7_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-376.73, 138.89, 2094.38]} rotation={[-1.54, -0.05, -0.68]} scale={[1, 1, 0.29]}>
              <mesh geometry={nodes.pPlane8_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-376.08, -759.41, 1630.4]} rotation={[-1.48, 1.15, -0.13]} scale={[1, 1, 0.29]}>
              <mesh geometry={nodes.pPlane9_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-186.81, 233.21, 1983.63]} rotation={[-1.53, -0.05, -0.47]} scale={[1, 1, 0.29]}>
              <mesh geometry={nodes.pPlane10_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[296.39, 138.86, 692.74]} rotation={[-Math.PI / 2, 0, 0.82]} scale={[1, 1, 0.29]}>
              <mesh geometry={nodes.pPlane11_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[47.08, 674.49, 1550.81]} rotation={[-1.64, -0.56, -0.01]} scale={[1, 1, 0.29]}>
              <mesh geometry={nodes.pPlane12_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-136.82, 522.41, 469.01]} rotation={[-0.76, -0.36, 1.2]} scale={[0.62, 0.62, 0.18]}>
              <mesh geometry={nodes.pPlane13_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[113.9, 89.72, 879.15]} rotation={[-Math.PI / 2, 0, 0.03]} scale={[0.62, 0.62, 0.18]}>
              <mesh geometry={nodes.pPlane14_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-259.75, -276.35, 323.56]} rotation={[-2.14, 0.1, 1.5]} scale={[0.62, 0.62, 0.18]}>
              <mesh geometry={nodes.pPlane15_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-675.07, 89.72, 1500.82]} rotation={[-Math.PI / 2, 0, -1.57]} scale={[0.62, 0.62, 0.18]}>
              <mesh geometry={nodes.pPlane16_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[448.89, -170.57, 1030.68]} rotation={[-1.33, 0.21, 0]} scale={[1, 1, 0.29]}>
              <mesh geometry={nodes.pPlane17_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-302.02, -11.23, 1023.1]} rotation={[-1.37, -0.03, -0.58]} scale={[0.43, 0.43, 0.13]}>
              <mesh geometry={nodes.pPlane18_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-49.85, 0, 1064.74]} rotation={[0, -Math.PI / 2, 0]} scale={[0.48, 1, 0.65]}>
              <mesh geometry={nodes.polySurface123_lambert5_0.geometry} material={materials.lambert5} />
            </group>
            <group position={[-787.46, 717.34, 1095.07]} scale={1.84}>
              <mesh geometry={nodes.pCube117_lambert5_0.geometry} material={materials.lambert5} />
            </group>
          </group>
        </group>
      </group>
    )
  }
  
