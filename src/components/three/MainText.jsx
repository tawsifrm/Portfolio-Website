import { Center, Text3D, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function MainText({ main, pretitle }) {
  const textRef = useRef()
  const preTextRef = useRef()
  
  // Add subtle animation to the text
  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1
      textRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.05
    }
    if (preTextRef.current) {
      preTextRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.1
    }
  })

  return (
    <Center>
      {/* Main Text */}
      <group ref={textRef} position={[0, 0, -1.25 / 8]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.06}
          bevelThickness={0.15}
          height={0.5}
          lineHeight={0.7}
          letterSpacing={-0.04}
          size={1.3}
          font="./DM Sans_Bold.json"
        >
          {main}
          <meshPhongMaterial
            color="#8b5cf6"
            specular="#fff"
            shininess={100}
            flatShading={false}
            emissive="#4c1d95"
            emissiveIntensity={0.3}
            attach="material"
          />
        </Text3D>
        
        {/* Glow effect */}
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.7}
          letterSpacing={-0.04}
          size={1.3}
          font="./DM Sans_Bold.json"
          position={[0, 0, -0.1]}
        >
          {main}
          <meshBasicMaterial 
            color="#a78bfa" 
            transparent 
            opacity={0.3} 
            fog={false}
          />
        </Text3D>
      </group>

      {/* Pre-title */}
      <group ref={preTextRef} position={[-0.5, 1.5, 0]}>
        <Text3D
          lineHeight={0.5}
          letterSpacing={-0.02}
          scale={0.35}
          font="/DM Sans_Bold.json"
        >
          {pretitle}
          <meshStandardMaterial
            attach="material"
            color="#4c1d95"
            roughness={0.5}
            metalness={0.7}
            emissive="#5b21b6"
            emissiveIntensity={0.3}
          />
        </Text3D>
      </group>
    </Center>
  )
}
