"use client";

import { Canvas } from "@react-three/fiber";
import SpaceEffects from "@/components/SpaceEffect";

export default function Page() {
  return (
    <main className="h-screen w-full bg-black">
      <Canvas className="h-full w-full" camera={{ position: [0, 0, 10], fov: 75 }}>
        <color attach="background" args={["#000000"]} />
        <SpaceEffects />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-4xl font-bold text-white">
          Welcome to the page!
        </h1>
      </div>
    </main>
  );
}