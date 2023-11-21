/* eslint-disable react/no-unknown-property */

import "./Desk.css"

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box() {
  return (
    <mesh scale={1.5}>
      <icosahedronGeometry attach="geometry" args={[1,0]} />
      <meshStandardMaterial color='rgb(223, 160, 11)' attach="material"/>
      
    </mesh>
  )
}

export default function Desk() {
  return (
    <div className="desk">
      <div className="obj">
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[0, 0, 0]} />
      <OrbitControls maxDistance={5} minDistance={3} autoRotateSpeed={4}  autoRotate={true} enableDamping={true} dampingFactor={0.01}/>
    </Canvas>
    </div>
    </div>
  )
}
