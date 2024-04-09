import { Canvas } from "@react-three/fiber"
import React from "react"
import Deadzone from "./three/Deadzone"
import HeroScene from "./three/HeroScene"

export default function MainHero({ isLoaded }) {
  return (
    <div className="bg-white h-screen">
      <Canvas color="white" camera={{ position: [0, 0, 10] }}>
        <HeroScene />
      </Canvas>
      {isLoaded && <Deadzone />}
    </div>
  )
}
