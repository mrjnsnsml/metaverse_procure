import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Datsun(props) {
    const { nodes, materials } = useGLTF('datsun/scene.gltf')
    return (
      <group {...props} dispose={null}>
        <group position={[-9.41, -10.34, 3.78]} rotation={[-Math.PI / 2, 0, 0]} scale={0}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI, 0, 0]} scale={[56.68, 56.68, 38.2]}>
              <mesh geometry={nodes.Sphere001_headlights_0.geometry} material={materials.headlights} />
            </group>
            <group position={[-392.54, -171.04, -646.6]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[103.06, 115.47, 115.47]}>
              <group rotation={[-0.37, 1.28, 0.51]} scale={0.01}>
                <mesh geometry={nodes.Cylinder014_tire_0.geometry} material={materials.tire} />
              </group>
              <mesh geometry={nodes.Cylinder013_alloy_0.geometry} material={materials.alloy} />
              <mesh geometry={nodes.Cylinder013_black_paint_0.geometry} material={materials.black_paint} />
              <mesh geometry={nodes.Cylinder013_tire_0.geometry} material={materials.tire} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <group position={[3.33, -3.89, 1.26]} rotation={[-0.51, -0.11, 0.39]}>
                <mesh geometry={nodes.wyciroczka001_black_matte_0.geometry} material={materials.black_matte} />
                <mesh geometry={nodes.wyciroczka001_chrome_0.geometry} material={materials.chrome} />
              </group>
              <group position={[3.93, 6.47, -1.71]} scale={[1.03, 1.15, 1.15]}>
                <mesh geometry={nodes.Cylinder012_alloy_0.geometry} material={materials.alloy} />
                <mesh geometry={nodes.Cylinder012_black_paint_0.geometry} material={materials.black_paint} />
                <mesh geometry={nodes.Cylinder012_tire_0.geometry} material={materials.tire} />
              </group>
              <mesh geometry={nodes.Plane057_chrome_0.geometry} material={materials.chrome} />
              <group position={[0, 11.43, -0.95]} rotation={[-1.38, 0, -Math.PI]} scale={0.96}>
                <mesh geometry={nodes.Plane056_license_0.geometry} material={materials.license} />
              </group>
              <group position={[-0.66, -3.06, 0.91]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.Plane055_black_matte_0.geometry} material={materials.black_matte} />
                <mesh geometry={nodes.Plane055_chrome_0.geometry} material={materials.chrome} />
                <mesh geometry={nodes.Plane055_black_paint_0.geometry} material={materials.black_paint} />
              </group>
              <group rotation={[-Math.PI, 0, 0]}>
                <mesh geometry={nodes.Plane054_black_paint_0.geometry} material={materials.black_paint} />
                <mesh geometry={nodes.Plane054_chrome_0.geometry} material={materials.chrome} />
                <mesh geometry={nodes.Plane054_chrome_0_1.geometry} material={materials.chrome} />
                <mesh geometry={nodes.Plane054_chrome_0_2.geometry} material={materials.chrome} />
                <mesh geometry={nodes.Plane054_chrome_0_3.geometry} material={materials.chrome} />
                <mesh geometry={nodes.Plane054_black_matte_0.geometry} material={materials.black_matte} />
                <mesh geometry={nodes.Plane054_black_matte_0_1.geometry} material={materials.black_matte} />
              </group>
              <group position={[0, -0.01, 0]} rotation={[-Math.PI, 0, 0]}>
                <mesh geometry={nodes.Plane053_headlights_0.geometry} material={materials.headlights} />
                <mesh geometry={nodes.Plane053_orange_glass_0.geometry} material={materials.orange_glass} />
                <mesh geometry={nodes.Plane053_chrome_0.geometry} material={materials.chrome} />
              </group>
              <mesh geometry={nodes.Plane052_black_matte_0.geometry} material={materials.black_matte} />
              <mesh geometry={nodes.Plane051_glass_0.geometry} material={materials.glass} />
              <group position={[-1.13, -10.89, -0.16]} rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh geometry={nodes.Cube001_black_paint_0.geometry} material={materials.black_paint} />
              </group>
              <mesh geometry={nodes.Plane050_paint_0.geometry} material={materials.paint} />
              <group rotation={[-Math.PI, 0, 0]}>
                <mesh geometry={nodes.Plane049_black_matte_0.geometry} material={materials.black_matte} />
                <mesh geometry={nodes.Plane049_black_paint_0.geometry} material={materials.black_paint} />
              </group>
              <group rotation={[-Math.PI, 0, 0]}>
                <mesh geometry={nodes.Plane048_black_matte_0.geometry} material={materials.black_matte} />
              </group>
              <group rotation={[-Math.PI, 0, 0]}>
                <mesh geometry={nodes.Plane047_red_glass_0.geometry} material={materials.red_glass} />
                <mesh geometry={nodes.Plane047_chrome_0.geometry} material={materials.chrome} />
                <mesh geometry={nodes.Plane047_headlights_0.geometry} material={materials.headlights} />
                <mesh geometry={nodes.Plane047_black_matte_0.geometry} material={materials.black_matte} />
              </group>
              <group rotation={[-Math.PI, 0, 0]}>
                <mesh geometry={nodes.Plane046_black_matte_0.geometry} material={materials.black_matte} />
                <mesh geometry={nodes.Plane046_chrome_0.geometry} material={materials.chrome} />
              </group>
              <mesh geometry={nodes.Plane045_paint_0.geometry} material={materials.paint} />
              <mesh geometry={nodes.Plane045_paint_0_1.geometry} material={materials.paint} />
              <mesh geometry={nodes.Plane044_black_matte_0.geometry} material={materials.black_matte} />
              <mesh geometry={nodes.Plane043_chrome_0.geometry} material={materials.chrome} />
              <mesh geometry={nodes.Plane042_black_matte_0.geometry} material={materials.black_matte} />
              <mesh geometry={nodes.Plane041_coat_0.geometry} material={materials.coat} />
              <mesh geometry={nodes.Plane041_coat_0_1.geometry} material={materials.coat} />
              <mesh geometry={nodes.Plane041_coat_0_2.geometry} material={materials.coat} />
              <group position={[3.89, -7.66, -1.71]} rotation={[0, 0, -0.24]} scale={[1.03, 1.15, 1.15]}>
                <mesh geometry={nodes.Cylinder011_alloy_0.geometry} material={materials.alloy} />
                <mesh geometry={nodes.Cylinder011_black_paint_0.geometry} material={materials.black_paint} />
                <mesh geometry={nodes.Cylinder011_tire_0.geometry} material={materials.tire} />
              </group>
              <group position={[1.33, -11.73, -1.24]} rotation={[1.76, 0.03, -0.01]} scale={0.87}>
                <mesh geometry={nodes.Plane040_license_0.geometry} material={materials.license} />
              </group>
              <group position={[0, 0.18, 0]} rotation={[-Math.PI, 0, 0]}>
                <mesh geometry={nodes.Plane039_headlights_0.geometry} material={materials.headlights} />
                <mesh geometry={nodes.Plane039_orange_glass_0.geometry} material={materials.orange_glass} />
                <mesh geometry={nodes.Plane039_chrome_0.geometry} material={materials.chrome} />
              </group>
              <group rotation={[-Math.PI, 0, 0]}>
                <mesh geometry={nodes.Plane038_orange_glass_0.geometry} material={materials.orange_glass} />
              </group>
              <group rotation={[-Math.PI, 0, 0]}>
                <mesh geometry={nodes.Plane037_orange_glass_0.geometry} material={materials.orange_glass} />
              </group>
              <mesh geometry={nodes.Plane036_black_matte_0.geometry} material={materials.black_matte} />
            </group>
            <group position={[0, -341.51, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[685.92, 1371.84, 685.92]}>
              <mesh geometry={nodes.Plane035__0.geometry} material={materials['Plane.035__0']} />
            </group>
            <group position={[392.54, -171.04, -646.6]} rotation={[-1.94, 1.28, 0.5]} scale={[1.19, 1.19, 1.4]}>
              <mesh geometry={nodes.Cylinder010_tire_0.geometry} material={materials.tire} />
            </group>
            <group position={[388.81, -171.04, 766.16]} rotation={[-1.14, 1.27, -0.34]} scale={[1.19, 1.19, 1.4]}>
              <mesh geometry={nodes.Cylinder009_tire_0.geometry} material={materials.tire} />
            </group>
            <group position={[-389.32, -172.79, 728.16]} rotation={[-Math.PI / 2, -0.03, 2.83]} scale={[103.06, 115.47, 115.47]}>
              <group rotation={[-0.37, 1.28, 0.51]} scale={0.01}>
                <mesh geometry={nodes.Cylinder008_tire_0.geometry} material={materials.tire} />
              </group>
              <mesh geometry={nodes.Cylinder007_alloy_0.geometry} material={materials.alloy} />
              <mesh geometry={nodes.Cylinder007_black_paint_0.geometry} material={materials.black_paint} />
              <mesh geometry={nodes.Cylinder007_tire_0.geometry} material={materials.tire} />
            </group>
            <group position={[-438.68, 70.14, -1050.15]} rotation={[-1.63, -1.39, -1.63]} scale={126.71}>
              <mesh geometry={nodes.Plane034_stickers_0.geometry} material={materials.stickers} />
              <mesh geometry={nodes.Plane034_chrome_0.geometry} material={materials.chrome} />
            </group>
            <group position={[-129.72, 37.74, -1157.98]} rotation={[-3.09, -0.02, -3.14]} scale={75.04}>
              <mesh geometry={nodes.Plane033_stickers_0.geometry} material={materials.stickers} />
            </group>
            <group position={[369.48, -126.17, -1112.15]} rotation={[2.77, 0.12, -1.23]} scale={129.14}>
              <mesh geometry={nodes.Plane032_stickers_0.geometry} material={materials.stickers} />
            </group>
            <group position={[440.04, 70.22, -972.61]} rotation={[-1.71, 1.33, 1.7]} scale={126.71}>
              <mesh geometry={nodes.Plane031_stickers_0.geometry} material={materials.stickers} />
              <mesh geometry={nodes.Plane031_chrome_0.geometry} material={materials.chrome} />
            </group>
            <group position={[157.01, -15.82, 1116.22]} scale={73.12}>
              <mesh geometry={nodes.Plane029_stickers_0.geometry} material={materials.stickers} />
            </group>
          </group>
        </group>
      </group>
    )
  }
  
