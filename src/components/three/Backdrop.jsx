import { useLoader } from "@react-three/fiber"
import React, { useEffect, useRef } from "react"
import { TextureLoader } from "three/src/loaders/TextureLoader"

export default function Backdrop() {
  const bgMap = useLoader(TextureLoader, "dreamlike_sky_islands.jpeg")
  const bgSphere = useRef()

  useEffect(() => {
    if (bgSphere.current) bgSphere.current.scale(-1, 1, 1)
  }, [])

  return (
    <mesh rotation={[0, -Math.PI / 2, 0]}>
      <sphereGeometry args={[12, 32, 32]} ref={bgSphere} />
      <meshBasicMaterial map={bgMap} />
    </mesh>
  )
}
