import React from "react"

export default function Floor() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  )
}
