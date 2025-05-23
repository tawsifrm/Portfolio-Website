import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { EffectComposer, Bloom, Noise, Vignette, DepthOfField } from "@react-three/postprocessing"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import Backdrop from "./Backdrop"
import MainText from "./MainText"
import * as THREE from "three"

export default function HeroScene() {
  const lightRef = useRef()
  const cameraRef = useRef()
  
  useFrame(({ clock }) => {
    if (lightRef.current) {
      // Subtle light movement
      lightRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.5) * 2
      lightRef.current.position.y = Math.cos(clock.getElapsedTime() * 0.3) * 2
    }
  })

  return (
    <>
      <PerspectiveCamera 
        makeDefault 
        position={[0, 0, 12]} 
        fov={50} 
        ref={cameraRef} 
      />
      
      <Center>
        <OrbitControls
          enableZoom={false}
          maxDistance={15}
          minDistance={8}
          autoRotate
          autoRotateSpeed={0.2}
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
        />
        
        {/* Main lighting */}
        <ambientLight intensity={0.3} color="#4f46e5" />
        <directionalLight 
          ref={lightRef}
          position={[5, 5, 5]} 
          intensity={1.5} 
          color="#a78bfa"
          castShadow
        />
        <directionalLight 
          position={[-5, 5, -5]} 
          intensity={0.5} 
          color="#7c3aed"
        />
        
        {/* Main text group */}
        <group rotation={[0, -Math.PI / 16, 0]} position={[0, 0, -5]}>
          <MainText main={"Tawsif\nMayaz"} pretitle={"Hi! I'm"} />
        </group>
      </Center>
      
      <Backdrop />
      
      {/* Post-processing effects */}
      <EffectComposer>
        <Bloom 
          luminanceThreshold={0.4}
          luminanceSmoothing={0.9}
          intensity={1.2}
          height={300}
        />
        <Noise opacity={0.02} />
        <Vignette 
          eskil={false} 
          offset={0.1} 
          darkness={0.4} 
          color="#4c1d95"
        />
      </EffectComposer>
    </>
  )
}
