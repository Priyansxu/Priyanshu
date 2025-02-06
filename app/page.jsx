"use client"

import { Canvas } from "@react-three/fiber"
import SpaceEffects from "@/components/SpaceEffect"

export default function Page() {
  return (
    <main className="h-screen w-full bg-black">
      <Canvas className="h-full w-full" camera={{ position: [0, 0, 10], fov: 75 }}>
        <color attach="background" args={["#000000"]} />
        <SpaceEffects />
      </Canvas>
    </main>
  )
}
