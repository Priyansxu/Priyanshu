"use client"

import Space from "@/components/SpaceEffects"

export default function Page() {
  return (
    <main className="relative">
      <Space />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Priyanshu Gupta</h1>
        <p className="text-xl">You may know other things</p>
      </div>
    </main>
  )
}