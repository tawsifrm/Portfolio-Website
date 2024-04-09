import { Text3D } from "@react-three/drei"
import React from "react"
import { Color } from "three"

export default function TestText({ text }) {
  return (
    <>
      <Text3D
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={1.25}
        font="/DM Sans_Bold.json"
      >
        {text}
      </Text3D>
    </>
  )
}
